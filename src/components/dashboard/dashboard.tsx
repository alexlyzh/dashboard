import MainLayout from '../main-layout/main-layout';
import Search from '../search/search';

function Dashboard(): JSX.Element {
  return (
    <MainLayout headingLabel={'Dashboard'} >
      <div className="container">
        <Search itemsCount={7}/>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
