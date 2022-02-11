import './back-link.css';
import { Link } from 'react-router-dom';

type Props = {
  to: string,
}

function BackLink({to}: Props): JSX.Element {
  return (
    <div className="container back-link-container">
      <Link className="back-link" to={to}>Back</Link>
    </div>
  );
}

export default BackLink;
