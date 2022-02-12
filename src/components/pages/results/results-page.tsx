import MainLayout from '../../main-layout/main-layout';
import BackLink from '../../back-link/back-link';
import { AppPath } from '../../../const';
import { useTest } from '../../../hooks/use-test';

function ResultsPage(): JSX.Element {
  const [test, isLoading] = useTest();
  return (
    <MainLayout heading={'Results'} subHeading={ isLoading || !test ? 'Loading...' : test.name } >
      <BackLink to={AppPath.root} />
    </MainLayout>
  );
}

export default ResultsPage;
