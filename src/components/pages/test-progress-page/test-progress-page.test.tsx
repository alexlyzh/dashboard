import TestProgressPage from './test-progress-page';
import { generatePath, Route, Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { AppPath } from '../../../const';
import { getRandomInteger, getRandomString } from '../../../utils/mock';

const MOCK_ID = 1;

const pathname = generatePath(AppPath.root, { id: MOCK_ID });
const history = createMemoryHistory();
history.push(pathname);

const renderPage = (heading: string) => {
  render(
    <Router history={history}>
      <Route exact path={pathname}>
        <TestProgressPage heading={heading} />
      </Route>
    </Router>
  );
};

describe('Component: FinalizePage', () => {
  it('should render correctly', () => {
    const heading = getRandomString(getRandomInteger(1,10));

    renderPage(heading);
    expect(screen.getByLabelText(new RegExp(`${heading} page`, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back/i })).toBeInTheDocument();
  });
});
