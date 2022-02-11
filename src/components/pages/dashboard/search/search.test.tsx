import Search from './search';
import { render, screen } from '@testing-library/react';
import { getMockTest } from '../../../../utils/mock';

describe('Component: Search', () => {
  it('should render correctly', () => {
    const tests = Array.from({ length: 3 }, getMockTest);

    render(
      <Search
        tests={tests}
        isLoadingTests={false}
        search={''}
        onSearchInput={jest.fn}
      />
    )

    expect(screen.getByText(`${tests.length} tests`)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
