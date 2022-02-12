import MainLayout from '../../main-layout/main-layout';
import BackLink from '../../back-link/back-link';
import { AppPath } from '../../../const';
import { useTest } from '../../../hooks/use-test';

type Props = {
  testId?: number,
}

function FinalizePage({testId}: Props): JSX.Element {
  const [test, isLoading] = useTest(testId);
  return (
    <MainLayout heading={'Finalize'} subHeading={ isLoading || !test ? 'Loading...' : test.name } >
      <div className="container">
        <BackLink to={AppPath.root} />
      </div>
    </MainLayout>
  );
}

export default FinalizePage;
