import { Outlet } from 'react-router-dom';
import Main from '../layout/Main';

function Speakers() {
  return (
    <Main className='pt-10'>
      Speakers
      <Outlet />
    </Main>
  );
}
export default Speakers;
