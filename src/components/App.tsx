import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from '../context/CartContext';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductItem from './ui/ProductItem';
import Checkout from '../pages/Checkout';
import PageNotFound from '../pages/PageNotFound';

function App() {
  const location = useLocation();

  const [orderOpen, setOrderOpen] = useState(false);

  // scroll to top of page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <HelmetProvider>
        <CartProvider>
          <Header
            currentPage={location.pathname}
            setOrderOpen={setOrderOpen}
            orderOpen={orderOpen}
          />
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path='/headphones'>
              <Route
                index
                element={<Products currentPage={location.pathname} />}
              />
              <Route
                path=':productSlug'
                element={<ProductItem currentPage={location.pathname} />}
              />
            </Route>
            <Route path='/speakers'>
              <Route
                index
                element={<Products currentPage={location.pathname} />}
              />
              <Route
                path=':productSlug'
                element={<ProductItem currentPage={location.pathname} />}
              />
            </Route>
            <Route path='/earphones'>
              <Route
                index
                element={<Products currentPage={location.pathname} />}
              />
              <Route
                path=':productSlug'
                element={<ProductItem currentPage={location.pathname} />}
              />
            </Route>
            <Route
              path='/checkout'
              element={<Checkout setOrderOpen={setOrderOpen} />}
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </CartProvider>
      </HelmetProvider>
      <Footer />
    </>
  );
}

export default App;
