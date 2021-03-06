import './test-card.css';
import { generatePath, Link } from 'react-router-dom';
import { getRandomHEXColor, removeWebProtocol } from '../../../../../utils/common';
import { AppPath, color, progressPageName, TestStatus } from '../../../../../const';
import { Site, Test } from '../../../../../types/types';

type Props = {
  test: Test,
  sites: Site[],
  isLoadingSites: boolean,
}

const getSiteNameById = (testId: number, sites: Site[]) => {
  const testSite = sites.find((site) => site.id === testId);
  return testSite ? removeWebProtocol(testSite.url) : null;
};

const getTestSiteLink = (siteId: number, sites: Site[]) => {
  const site = sites.find((item) => item.id === siteId);
  return site ? site.url : '#';
};

function TestCard({test, sites, isLoadingSites}: Props): JSX.Element {
  const {id, name, type, status, siteId} = test;

  const isResultsPageRedirect = status !== TestStatus.draft.toLowerCase();
  const pathname = isResultsPageRedirect
    ? generatePath(AppPath.results, {id})
    : generatePath(AppPath.finalize, {id});

  return (
    <li className="test" aria-label="Test card">
      <div className="test__mark" style={{backgroundColor: getRandomHEXColor()}}/>
      <p className="test__name" aria-label="Test name">{ name }</p>
      <span className="test__text" aria-label="Test type">
        { type }
      </span>
      <span
        className="test__text test__status"
        style={{color: color[status.toLowerCase() as keyof typeof color]}}
        aria-label="Test status"
      >
        { status }
      </span>
      <a
        className="test__text test__site-link"
        href={getTestSiteLink(siteId, sites)} aria-label="Test site"
        target="_blank"
        rel="noreferrer"
      >
        { isLoadingSites ? 'Loading...' : getSiteNameById(siteId, sites) }
      </a>
      <Link
        className={`button ${!isResultsPageRedirect ? 'button--dark' : ''}`}
        to={pathname}
      >
        { isResultsPageRedirect ? progressPageName.results : progressPageName.finalize }
      </Link>
    </li>
  );
}

export default TestCard;
