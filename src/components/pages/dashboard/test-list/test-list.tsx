import './test-list.css';
import { generatePath, Link } from 'react-router-dom';
import { AppPath, color, TestStatus, testType } from '../../../../const';
import { getRandomHEXColor, getSiteNameById } from '../../../../utils/common';
import { Site, Test } from '../../../../types/types';

type Props = {
  tests: Test[],
  sites: Site[],
  isLoadingSites: boolean,
  isLoadingTests: boolean,
  onResetBtnClick: () => void;
}

function TestList({tests, sites, isLoadingSites, isLoadingTests, onResetBtnClick}: Props): JSX.Element {
  if (!isLoadingTests && !tests.length) {
    return (
      <div className="tests-not-found">
        <p>Your search did not match any results.</p>
        <button className="button" onClick={onResetBtnClick}>Reset</button>
      </div>
    );
  }

  return (
    <ul className="test-list">
      { tests.map(({id, name, type, status, siteId}) => {
        const isResults = status !== TestStatus.DRAFT;
        const pathname = isResults
          ? generatePath(AppPath.results, {id})
          : generatePath(AppPath.finalize, {id});

        const getTestSiteLink = (id: number) => {
          const site = sites.find((site) => site.id === id);
          return site ? site.url : '#';
        };

        return (
          <li className="test" aria-label="Test card" key={id}>
            <div className="test__mark" style={{backgroundColor: getRandomHEXColor()}}/>
            <p className="test__name" aria-label="Test name">{ name }</p>
            <span className="test__text" aria-label="Test type">
              { testType[type.toLowerCase() as keyof typeof testType] }
            </span>
            <span
              className="test__text test__status"
              style={{color: color[status.toLowerCase() as keyof typeof color]}}
              aria-label="Test status"
            >
              {status.toLowerCase()}
            </span>
            <a
              className="test__text test__site-link"
              href={getTestSiteLink(siteId)} aria-label="Test site"
              target="_blank"
              rel="noreferrer"
            >
              { isLoadingSites ? 'Loading...' : getSiteNameById(siteId, sites) }
            </a>
            <Link
              className={`button ${!isResults ? 'button--dark' : ''}`}
              to={pathname}
            >
              { isResults ? 'Results' : 'Finalize' }
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default TestList;
