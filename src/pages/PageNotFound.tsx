import { Outlet } from 'react-router-dom';
import Main from '../layout/Main';

function PageNotFound() {
  return (
    <Main>
      Page not found
      <Outlet />
    </Main>
  );
}
export default PageNotFound;
