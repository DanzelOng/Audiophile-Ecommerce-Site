import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from '../pages/Home';
import Headphones from '../pages/Headphones';
import HeadphoneItem from './headphones/HeadphoneItem';
import Speakers from '../pages/Speakers';
import SpeakerItem from './speakers/SpeakerItem';
import Earphones from '../pages/Earphones';
import EarphoneItem from './earphones/EarphoneItem';
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
          <Route index element={<Headphones />} />
          <Route path=':headphoneSlug' element={<HeadphoneItem />} />
        </Route>
        <Route path='/speakers'>
          <Route index element={<Speakers />} />
          <Route path=':speakerSlug' element={<SpeakerItem />} />
        </Route>
        <Route path='/earphones'>
          <Route index element={<Earphones />} />
          <Route path=':earphoneSlug' element={<EarphoneItem />} />
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
