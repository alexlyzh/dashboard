import MainLayout from '../../main-layout/main-layout';
import BackLink from '../../back-link/back-link';
import Footer from '../../footer/footer';
import { useParams } from 'react-router-dom';
import { appPath } from '../../../const';

type PageParams = {
  id: string,
}

type Props = {
  testId?: number,
}

function FinalizePage({testId}: Props): JSX.Element {
  const params: PageParams = useParams();
  const id = Number(testId ? testId : params.id);
  return (
    <>
      <MainLayout heading={'Finalize'} subHeading={'Spring promotion'} />
      <Footer>
        <BackLink to={appPath.root} />
      </Footer>
    </>
  );
}

export default FinalizePage;
