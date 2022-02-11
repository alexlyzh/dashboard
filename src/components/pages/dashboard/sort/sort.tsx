import './sort.css';

type Props = {
  isVisible: boolean,
}

function Sort({isVisible}: Props): JSX.Element | null {
  if (!isVisible) {
    return null;
  }

  return (
    <ul className="sort">
      <li className="filter__item">
        <button className="sort__button" type="button">Name</button>
      </li>
      <li className="filter__item">
        <button className="sort__button" type="button">Type</button>
      </li>
      <li className="filter__item">
        <button className="sort__button" type="button">Status</button>
      </li>
      <li className="filter__item">
        <button className="sort__button" type="button">Site</button>
      </li>
    </ul>
  );
}

export default Sort;
