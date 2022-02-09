import { ReactNode } from 'react';
import './main-layout.css';

type Props = {
  children: ReactNode,
  headingLabel: string,
  label?: string,
}

function MainLayout({children, headingLabel, label}: Props): JSX.Element {
  return (
    <div className="page">
      <header>
        <div className="container">
          <h1 className="header__heading">{headingLabel}</h1>
          {label
            ? <h2 className="header__label">{label}</h2>
            : null}
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
