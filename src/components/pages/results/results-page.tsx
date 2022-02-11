import MainLayout from '../../main-layout/main-layout';
import BackLink from '../../back-link/back-link';
import { appPath } from '../../../const';
import { useTest } from '../../../hooks/use-test';

type Props = {
  testId?: number,
}

function ResultsPage({testId}: Props): JSX.Element {
  const test = useTest(testId);
  return (
    <MainLayout heading={'Results'} subHeading={ !test ? 'Loading...' : test.name } >
      <BackLink to={appPath.root} />
    </MainLayout>
  );
}

export default ResultsPage;
