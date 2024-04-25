import { Outlet } from 'react-router-dom';
import Main from '../layout/Main';

function Earphones() {
  return (
    <Main className='pt-10'>
      Earphones
      <Outlet />
    </Main>
  );
}
export default Earphones;
