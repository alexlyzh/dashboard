import './search.css';
import { Test } from '../../../../types/types';
import { ChangeEvent, useRef, useState } from 'react';

type Props = {
  tests: Test[],
  isLoadingTests: boolean,
  search: string,
  onSearchInput: (evt: ChangeEvent<HTMLInputElement>) => void,
}

function Search({ tests, isLoadingTests, search, onSearchInput }: Props): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const focusOnInput = () => inputRef.current && inputRef.current.focus();
  const onInputFocus = () => setIsActive(true);
  const onInputBlur = () => setIsActive(false);

  return (
    <form
      className={`search ${isActive ? 'search--active': ''}`}
      onClick={focusOnInput}
      onSubmit={(evt) => evt.preventDefault()}
    >
      <div className="search__icon">
        <img style={{height: '14px', width: '14px'}} src="img/search.svg" alt="search-icon"/>
      </div>
      <input
        ref={inputRef}
        className="search__input"
        type="search"
        placeholder="What test are you looking for?"
        value={search}
        onInput={onSearchInput}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
      <div className="search__counter">{ isLoadingTests ? 'Loading...' : `${tests.length} tests` }</div>
    </form>
  );
}

export default Search;
