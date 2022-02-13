import MainLayout from '../../main-layout/main-layout';
import BackLink from '../../back-link/back-link';
import { AppPath } from '../../../const';
import { useTest } from '../../../hooks/use-test';

function FinalizePage(): JSX.Element {
  const [test, isLoading] = useTest();
  return (
    <MainLayout heading={'Finalize'} subHeading={ isLoading || !test ? 'Loading...' : test.name } >
      <span className="visually-hidden" aria-label="Finalize page">Finalize page</span>
      <BackLink to={AppPath.root} />
    </MainLayout>
  );
}

export default FinalizePage;
