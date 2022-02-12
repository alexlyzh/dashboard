import TestCard from './test-card';
import { Router, Switch, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { getMockSite, getMockTest } from '../../../../../utils/mock';
import { createMemoryHistory } from 'history';

const MOCK_SITE_ID = 1;

const history = createMemoryHistory();

describe('Component: TestCard', () => {
  it('should render correctly', () => {
    const test = getMockTest(MOCK_SITE_ID);
    const site = getMockSite(MOCK_SITE_ID);

    render(
      <Router history={history}>
        <TestCard
          test={test}
          sites={[site]}
          isLoadingSites={false}
        />
      </Router>
    );

    expect(screen.getByLabelText(/test card/i)).toBeInTheDocument();
    expect(screen.getByText(test.name)).toBeInTheDocument();
  });
});
