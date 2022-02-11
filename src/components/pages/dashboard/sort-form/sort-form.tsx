import './sort-form.css';
import { SortType } from '../../../../const';

type Props = {
  isVisible: boolean,
  sort: SortType | '',
  onSortNameClick: () => void,
  onSortTypeClick: () => void,
  onSortStatusClick: () => void,
  onSortSiteClick: () => void,
}

function SortForm(props: Props): JSX.Element | null {
  const {isVisible, sort, onSortSiteClick, onSortTypeClick, onSortStatusClick, onSortNameClick} = props;

  const isSortDesc = sort === SortType.SiteDesc
    || sort === SortType.StatusDesc
    || sort === SortType.NameDesc
    || sort === SortType.TypeDesc;

  if (!isVisible) {
    return null;
  }

  return (
    <form aria-label="Sort form">
      <ul className="sort">
        <li>
          <button className="sort__button" type="button" onClick={onSortNameClick}>
            <span>Name</span>
            { sort === SortType.NameAsc || sort === SortType.NameDesc
              ? <div className={`sort__arrow ${isSortDesc ? 'sort__arrow--desc' : ''}`}/>
              : null}
          </button>
        </li>
        <li>
          <button className="sort__button" type="button" onClick={onSortTypeClick}>
            <span>Type</span>
            { sort === SortType.TypeAsc || sort === SortType.TypeDesc
              ? <div className={`sort__arrow ${isSortDesc ? 'sort__arrow--desc' : ''}`}/>
              : null}
          </button>
        </li>
        <li>
          <button className="sort__button" type="button" onClick={onSortStatusClick}>
            <span>Status</span>
            { sort === SortType.StatusAsc || sort === SortType.StatusDesc
              ? <div className={`sort__arrow ${isSortDesc ? 'sort__arrow--desc' : ''}`}/>
              : null}
          </button>
        </li>
        <li>
          <button className="sort__button" type="button" onClick={onSortSiteClick}>
            <span>Site</span>
            { sort === SortType.SiteAsc || sort === SortType.SiteDesc
              ? <div className={`sort__arrow ${isSortDesc ? 'sort__arrow--desc' : ''}`}/>
              : null}
          </button>
        </li>
      </ul>
    </form>
  );
}

export default SortForm;
