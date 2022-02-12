import TestList from './test-list';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { getRandomInteger, getSeveralMockTests } from '../../../../utils/mock';

describe('Component: TestList', () => {
  it('should render correctly and call onResetBtnClick if there are no tests', () => {
    const onResetBtnClick = jest.fn();
    render(
      <TestList
        tests={[]}
        sites={[]}
        isLoadingSites={false}
        isLoadingTests={false}
        onResetBtnClick={onResetBtnClick}
      />
    );

    const resetButton = screen.getByRole('button', { name: /reset/i });
    expect(screen.getByText(/search did not match any results/i)).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    userEvent.click(resetButton);
    expect(onResetBtnClick).toBeCalled();
  });

  it('should render correctly', () => {
    const tests = getSeveralMockTests(getRandomInteger(1, 10));

    render(
      <Router history={createMemoryHistory()}>
        <TestList
          tests={tests}
          sites={[]}
          isLoadingSites={false}
          isLoadingTests={false}
          onResetBtnClick={jest.fn}
        />
      </Router>
    );

    expect(screen.queryByText(/search did not match any results/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /reset/i })).not.toBeInTheDocument();
    expect(screen.getAllByLabelText(/test card/i)).toHaveLength(tests.length);
  });
});
