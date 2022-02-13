import { useSort } from './use-sort';
import { act, renderHook } from '@testing-library/react-hooks';
import { SortType } from '../../const';

describe('HooK: useSort', () => {
  it('should return an object with correct data', () => {
    const { result } = renderHook(() => useSort());
    const { currentSort, handleNameSort, handleTypeSort, handleSiteSort, handleStatusSort } = result.current;

    expect(result.current).toBeInstanceOf(Object);
    expect('currentSort' in result.current).toBe(true);
    expect('handleNameSort' in result.current).toBe(true);
    expect('handleTypeSort' in result.current).toBe(true);
    expect('handleSiteSort' in result.current).toBe(true);
    expect('handleStatusSort' in result.current).toBe(true);

    expect(currentSort).toEqual('');
    expect(handleNameSort).toBeInstanceOf(Function);
    expect(handleTypeSort).toBeInstanceOf(Function);
    expect(handleSiteSort).toBeInstanceOf(Function);
    expect(handleStatusSort).toBeInstanceOf(Function);
  });

  describe('should correctly change state', () => {
    it('should change name sort correctly', () => {
      const { result } = renderHook(() => useSort());
      const { currentSort: initialState } = result.current;

      expect(initialState).toEqual('');

      const { handleNameSort: handleAscSort } = result.current;
      act(() => handleAscSort());
      const {currentSort: asc} = result.current;
      expect(asc).toEqual(SortType.NameAsc);

      const { handleNameSort: handleDescSort } = result.current;
      act(() => handleDescSort());
      const {currentSort: desc} = result.current;
      expect(desc).toEqual(SortType.NameDesc);
    });

    it('should change type sort correctly', () => {
      const { result } = renderHook(() => useSort());
      const { currentSort: initialState } = result.current;

      expect(initialState).toEqual('');

      const { handleTypeSort: handleAscSort } = result.current;
      act(() => handleAscSort());
      const {currentSort: asc} = result.current;
      expect(asc).toEqual(SortType.TypeAsc);

      const { handleTypeSort: handleDescSort } = result.current;
      act(() => handleDescSort());
      const {currentSort: desc} = result.current;
      expect(desc).toEqual(SortType.TypeDesc);
    });

    it('should change site sort correctly', () => {
      const { result } = renderHook(() => useSort());
      const { currentSort: initialState } = result.current;

      expect(initialState).toEqual('');

      const { handleSiteSort: handleAscSort } = result.current;
      act(() => handleAscSort());
      const {currentSort: asc} = result.current;
      expect(asc).toEqual(SortType.SiteAsc);

      const { handleSiteSort: handleDescSort } = result.current;
      act(() => handleDescSort());
      const {currentSort: desc} = result.current;
      expect(desc).toEqual(SortType.SiteDesc);
    });

    it('should change status sort correctly', () => {
      const { result } = renderHook(() => useSort());
      const { currentSort: initialState } = result.current;

      expect(initialState).toEqual('');

      const { handleStatusSort: handleAscSort } = result.current;
      act(() => handleAscSort());
      const {currentSort: asc} = result.current;
      expect(asc).toEqual(SortType.StatusAsc);

      const { handleStatusSort: handleDescSort } = result.current;
      act(() => handleDescSort());
      const {currentSort: desc} = result.current;
      expect(desc).toEqual(SortType.StatusDesc);
    });
  });
});

