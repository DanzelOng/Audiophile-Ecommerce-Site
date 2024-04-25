import { Routes, Route, useLocation } from 'react-router-dom';
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
  return (
    <>
      <Header currentPage={location.pathname} />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='/headphones' element={<Headphones />}>
          <Route path=':headphoneProduct' element={<HeadphoneItem />} />
        </Route>
        <Route path='/speakers' element={<Speakers />}>
          <Route path=':speakerProduct' element={<SpeakerItem />} />
        </Route>
        <Route path='/earphones' element={<Earphones />}>
          <Route path=':earphoneProduct' element={<EarphoneItem />} />
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
