import { Outlet } from 'react-router-dom';
import Main from '../layout/Main';

function Headphones() {
  return (
    <Main>
      Headphones
      <Outlet />
    </Main>
  );
}
export default Headphones;
