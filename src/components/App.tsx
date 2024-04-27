import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductItem from './ui/ProductItem';
import Checkout from '../pages/Checkout';
import PageNotFound from '../pages/PageNotFound';
import AudioGearSection from './ui/AudioGearSection';

function App() {
  const location = useLocation();

  // scroll to top of page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header currentPage={location.pathname} />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='/headphones'>
          <Route index element={<Products currentPage={location.pathname} />} />
          <Route
            path=':productSlug'
            element={<ProductItem currentPage={location.pathname} />}
          />
        </Route>
        <Route path='/speakers'>
          <Route index element={<Products currentPage={location.pathname} />} />
          <Route
            path=':productSlug'
            element={<ProductItem currentPage={location.pathname} />}
          />
        </Route>
        <Route path='/earphones'>
          <Route index element={<Products currentPage={location.pathname} />} />
          <Route
            path=':productSlug'
            element={<ProductItem currentPage={location.pathname} />}
          />
        </Route>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <AudioGearSection />
      <Footer />
    </>
  );
}

export default App;
