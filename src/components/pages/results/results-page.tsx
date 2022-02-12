import MainLayout from '../../main-layout/main-layout';
import BackLink from '../../back-link/back-link';
import { AppPath } from '../../../const';
import { useTest } from '../../../hooks/use-test';

type Props = {
  testId?: number,
}

function ResultsPage({testId}: Props): JSX.Element {
  const [test, isLoading] = useTest(testId);
  return (
    <MainLayout heading={'Results'} subHeading={ isLoading || !test ? 'Loading...' : test.name } >
      <BackLink to={AppPath.root} />
    </MainLayout>
  );
}

export default ResultsPage;
