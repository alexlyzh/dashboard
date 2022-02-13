import { useSearch } from './use-search';
import { act, renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Hook: useSearch', () => {
  it('should return an object with correct data', () => {
    const { result } = renderHook(() => useSearch());
    const { search, handleSearchChange, resetSearch } = result.current;

    expect(result.current).toBeInstanceOf(Object);
    expect('search' in result.current).toBe(true);
    expect('handleSearchChange' in result.current).toBe(true);
    expect('resetSearch' in result.current).toBe(true);

    expect(search).toEqual('');
    expect(handleSearchChange).toBeInstanceOf(Function);
    expect(resetSearch).toBeInstanceOf(Function);
  });

  it('should change state correctly',  async () => {
    const { result } = renderHook(() => useSearch());
    const { search: initialSearch } = result.current;

    expect(initialSearch).toEqual('');
    const { handleSearchChange } = result.current;

    render(<input type="text" data-testid='simple-input' onChange={handleSearchChange} />);

    fireEvent.change(screen.getByTestId('simple-input'), { target: { value: 'Hello' } });

    const { search: handledSearchState } = result.current;
    expect(handledSearchState).toEqual('Hello');

    const { resetSearch } = result.current;
    act(() => resetSearch());

    const { search: resetSearchState } = result.current;
    expect(resetSearchState).toEqual('');
  });
});
