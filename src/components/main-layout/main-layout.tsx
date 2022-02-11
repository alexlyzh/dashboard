import { ReactNode } from 'react';
import './main-layout.css';

type Props = {
  heading: string,
  children?: ReactNode,
  subHeading?: string,
}

function MainLayout({children, heading, subHeading}: Props): JSX.Element {
  return (
    <div className="page">
      <header>
        <div className="container">
          <h1 className="header__heading">{heading}</h1>
          {subHeading
            ? <h2 className="header__label">{subHeading}</h2>
            : null}
        </div>
      </header>
      <main>
        { children ? children : null }
      </main>
    </div>
  );
}

export default MainLayout;
