import { Outlet } from 'react-router-dom';
import Main from '../layout/Main';

function Checkout() {
  return (
    <Main>
      Checkout
      <Outlet />
    </Main>
  );
}
export default Checkout;
