import './test-list.css';
import { generatePath, Link } from 'react-router-dom';
import { appPath, colorMap, TestStatus, typeMap } from '../../../../const';
import { getRandomHEXColor, getSiteName } from '../../../../utils';
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
      { tests.map(({id, name, type, status}) => {
        const isResults = status !== TestStatus.DRAFT;
        const pathname = isResults
          ? generatePath(appPath.results, {id})
          : generatePath(appPath.finalize, {id});

        return (
          <li className="test" key={id}>
            <div className="test__mark" style={{backgroundColor: getRandomHEXColor()}}/>
            <p className="test__name" aria-label="Test name">{ name }</p>
            <span className="test__text" aria-label="Test type">
              { typeMap[type.toLowerCase() as keyof typeof typeMap] }
            </span>
            <span
              className="test__text test__status"
              style={{color: colorMap[status.toLowerCase() as keyof typeof colorMap]}}
              aria-label="Test status"
            >
              {status.toLowerCase()}
            </span>
            <span className="test__text" aria-label="Test site">{ isLoadingSites ? 'Loading...' : getSiteName(id, sites) }</span>
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