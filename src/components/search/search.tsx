import './search.css';

type Props = {
  itemsCount: number,
}


function Search({itemsCount}: Props): JSX.Element {
  return (
    <div className="search">
      <div className="search__icon">
        <img style={{height: '14px', width: '14px'}} src="img/search.svg" alt="search-icon"/>
      </div>
      <input
        className="search__input"
        type="search"
        placeholder="What test are you looking for?"
      />
      <div className="search__counter">{ `${itemsCount} tests` }</div>
    </div>
  );
}

export default Search;
