import { Link } from 'react-router-dom';
import { YX1Earphone, ZX7Speaker, ZX9Speaker } from '../data/data';
import patternCircleSvg from '/assets/svgs/pattern-circles.svg';
import Main from '../layout/Main';
import Navigation from '../components/ui/Navigation';
import Button from '../components/ui/Button';
import ResponsiveImage from '../components/ui/ResponsiveImage';

function Home() {
  return (
    <Main>
      <Navigation
        dataAttrName='navigation-mode'
        dataAttrValue='desktop'
      />
      <section className='zx9-speaker'>
        <img
          className='zx9-speaker__blob'
          src={patternCircleSvg}
          alt='Decorative blob'
        />
        <div className='zx9-speaker__img-container'>
          <ResponsiveImage
            className='zx9-speaker__img'
            images={ZX9Speaker}
            title='ZX9 Speaker'
          />
        </div>
        <div className='zx9-speaker__content'>
          <h3 className='zx9-speaker__heading'>ZX9 Speaker</h3>
          <p className='zx9-speaker__info'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to='/speakers/zx9-speaker'>
            <Button type='contrast'>See Product</Button>
          </Link>
        </div>
      </section>
      <section className='zx7-speaker'>
        <div className='zx7-speaker__img-container'>
          <ResponsiveImage
            className='zx7-speaker__img'
            images={ZX7Speaker}
            title='ZX7 Speaker'
          />
        </div>
        <div className='zx7-speaker__content'>
          <h3 className='zx7-speaker__heading'>ZX7 Speaker</h3>
          <Link to='/speakers/zx7-speaker'>
            <Button type='transparent'>See Product</Button>
          </Link>
        </div>
      </section>
      <section className='yx1-earphones'>
        <div className='yx1-earphones__img-container'>
          <ResponsiveImage
            className='yx1-earphones__img'
            images={YX1Earphone}
            title='YX1 Earphones'
          />
        </div>
        <div className='yx1-earphones__content'>
          <h3 className='yx1-earphones__heading'>YX1 Earphones</h3>
          <Link to='/earphones/yx1-earphones'>
            <Button type='transparent'>See Product</Button>
          </Link>
        </div>
      </section>
    </Main>
  );
}

export default Home;
