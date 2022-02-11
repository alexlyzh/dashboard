import './sort-form.css';

type Props = {
  isVisible: boolean,
  onSortNameClick: () => void,
  onSortTypeClick: () => void,
  onSortStatusClick: () => void,
  onSortSiteClick: () => void,
}

function SortForm(props: Props): JSX.Element | null {
  const {isVisible, onSortSiteClick, onSortTypeClick, onSortStatusClick, onSortNameClick} = props;

  if (!isVisible) {
    return null;
  }

  return (
    <form aria-label="Sort form">
      <ul className="sort">
        <li className="filter__item">
          <button className="sort__button" type="button" onClick={onSortNameClick}>Name</button>
        </li>
        <li className="filter__item">
          <button className="sort__button" type="button" onClick={onSortTypeClick}>Type</button>
        </li>
        <li className="filter__item">
          <button className="sort__button" type="button" onClick={onSortStatusClick}>Status</button>
        </li>
        <li className="filter__item">
          <button className="sort__button" type="button" onClick={onSortSiteClick}>Site</button>
        </li>
      </ul>
    </form>
  );
}

export default SortForm;
