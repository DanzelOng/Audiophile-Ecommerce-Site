import { motion } from 'framer-motion';
import { heroImgs } from '../../data/data';
import ResponsiveImage from './ResponsiveImage';
import Button from './Button';

function Hero() {
  return (
    <section className='header__hero'>
      <motion.div
        className='header__hero-img-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.7 }}
      >
        <ResponsiveImage
          className='header__hero-img'
          images={heroImgs}
          title='XX99 Mark II headphones'
        />
      </motion.div>
      <motion.div
        className='header__hero-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 1.2 }}
      >
        <span className='header__hero-subheading'>New Product</span>
        <h1 className='header__hero-heading'>XX99 Mark II Headphones</h1>
        <p className='header__hero-info'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button type='regular' href='/headphones/xx99-mark-two-headphones'>
          See Product
        </Button>
      </motion.div>
    </section>
  );
}

export default Hero;
