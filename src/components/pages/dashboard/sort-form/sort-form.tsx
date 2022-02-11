import './sort-form.css';
import {SortType} from '../../../../const';

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
            Name
            { sort === SortType.NameAsc || sort === SortType.NameDesc
              ? <div className={`sort__arrow ${isSortDesc ? 'sort__arrow--desc' : ''}`}/>
              : null}
          </button>
        </li>
        <li>
          <button className="sort__button" type="button" onClick={onSortTypeClick}>
            Type
            { sort === SortType.TypeAsc || sort === SortType.TypeDesc
              ? <div className={`sort__arrow ${isSortDesc ? 'sort__arrow--desc' : ''}`}/>
              : null}
          </button>
        </li>
        <li>
          <button className="sort__button" type="button" onClick={onSortStatusClick}>
            Status
            { sort === SortType.StatusAsc || sort === SortType.StatusDesc
              ? <div className={`sort__arrow ${isSortDesc ? 'sort__arrow--desc' : ''}`}/>
              : null}
          </button>
        </li>
        <li>
          <button className="sort__button" type="button" onClick={onSortSiteClick}>
            Site
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
