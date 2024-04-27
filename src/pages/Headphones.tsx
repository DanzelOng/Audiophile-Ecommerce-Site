import { Outlet } from 'react-router-dom';
import Main from '../layout/Main';

function Headphones() {
  return (
    <Main className='pt-10'>
      Headphones
      <Outlet />
    </Main>
  );
}
export default Headphones;
