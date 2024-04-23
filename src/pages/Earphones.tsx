import { Outlet } from 'react-router-dom';
import Main from '../layout/Main';

function Earphones() {
  return (
    <Main>
      Earphones
      <Outlet />
    </Main>
  );
}
export default Earphones;
