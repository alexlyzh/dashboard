import './test-list.css';
import TestCard from './test/test-card';
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
      <div className="tests-not-found" aria-label="No tests found">
        <p>Your search did not match any results.</p>
        <button className="button" onClick={onResetBtnClick}>Reset</button>
      </div>
    );
  }

  return (
    <ul aria-label="list of tests">
      {tests.map((test) => (
        <TestCard
          test={test}
          sites={sites}
          isLoadingSites={isLoadingSites}
          key={test.id}
        />
      ))}
    </ul>
  );
}

export default TestList;
