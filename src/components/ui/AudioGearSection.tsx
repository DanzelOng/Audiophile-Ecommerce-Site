import ResponsiveImage from './ResponsiveImage';
import { audioGearImgs } from '../../data/data';

function AudioGearSection() {
  return (
    <section className='audio-gear'>
      <div className='audio-gear__img-container'>
        <ResponsiveImage
          className='audio-gear__img'
          images={audioGearImgs}
          title='Test'
        />
      </div>
      <div className='audio-gear__content'>
        <h3 className='audio-gear__heading'>
          Bringing you the <span>best</span> audio gear
        </h3>
        <p className='audio-gear__info'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}

export default AudioGearSection;
