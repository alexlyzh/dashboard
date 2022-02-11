import MainLayout from '../../main-layout/main-layout';
import BackLink from '../../back-link/back-link';
import Footer from '../../footer/footer';
import { appPath } from '../../../const';

function ResultsPage(): JSX.Element {
  return (
    <>
      <MainLayout heading={'Results'} subHeading={'Order basket redesign'} />
      <Footer>
        <BackLink to={appPath.root} />
      </Footer>
    </>
  );
}

export default ResultsPage;
