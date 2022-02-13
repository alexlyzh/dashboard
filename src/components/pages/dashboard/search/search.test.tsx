import Search from './search';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { getMockTest } from '../../../../utils/mock';

describe('Component: Search', () => {
  it('should render correctly and call onSearchInput',  () => {
    const tests = Array.from({ length: 3 }, getMockTest);
    const onSearchInput = jest.fn();
    render(
      <Search
        tests={tests}
        isLoadingTests={false}
        search={''}
        onSearchInput={onSearchInput}
      />
    )

    const input = screen.getByRole('textbox');
    expect(screen.getByText(`${tests.length} tests`)).toBeInTheDocument();
    expect(screen.getByLabelText(/search form/i)).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toBeEmptyDOMElement();

    userEvent.type(input, 'some-text');
    expect(onSearchInput).toBeCalled();
  });
});
