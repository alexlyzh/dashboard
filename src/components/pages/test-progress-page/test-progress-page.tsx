import MainLayout from '../../main-layout/main-layout';
import BackLink from '../../back-link/back-link';
import { AppPath } from '../../../const';
import { useTest } from '../../../hooks/use-test/use-test';

type Props = {
  heading: string,
}

function TestProgressPage({heading}: Props): JSX.Element {
  const [test, isLoading] = useTest();
  return (
    <MainLayout heading={heading} subHeading={ isLoading || !test ? 'Loading...' : test.name } >
      <span className="visually-hidden" aria-label={`${heading} page`}>{`${heading} page`}</span>
      <BackLink to={AppPath.root} />
    </MainLayout>
  );
}

export default TestProgressPage;
