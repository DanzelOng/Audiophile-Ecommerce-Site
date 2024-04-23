import { Outlet } from 'react-router-dom';
import Main from '../layout/Main';

function Speakers() {
  return (
    <Main>
      Speakers
      <Outlet />
    </Main>
  );
}
export default Speakers;
