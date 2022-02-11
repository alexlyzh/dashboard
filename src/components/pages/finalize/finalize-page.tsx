import MainLayout from '../../main-layout/main-layout';
import BackLink from '../../back-link/back-link';
import { appPath } from '../../../const';
import { useTest } from '../../../hooks/use-test';

type Props = {
  testId?: number,
}

function FinalizePage({testId}: Props): JSX.Element {
  const test = useTest(testId);

  return (
    <MainLayout heading={'Finalize'} subHeading={ !test ? 'Loading...' : test.name } >
      <div className="container">
        <BackLink to={appPath.root} />
      </div>
    </MainLayout>
  );
}

export default FinalizePage;
