import './footer.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode,
}

function Footer({children}: Props): JSX.Element | null {
  if (!children) {
    return null;
  }

  return (
    <footer>
      <div className="container">
        { children }
      </div>
    </footer>
  );
}

export default Footer;
