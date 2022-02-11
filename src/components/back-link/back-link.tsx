import './back-link.css';
import { Link } from 'react-router-dom';

type Props = {
  to: string,
}

function BackLink({to}: Props): JSX.Element {
  return <Link className="back-link" to={to}>Back</Link>;
}

export default BackLink;
