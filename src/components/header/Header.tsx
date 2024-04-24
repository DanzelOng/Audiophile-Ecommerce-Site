import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { headerNavigation } from '../../data/data';
import Hero from '../ui/Hero';
import audiophileLogo from '/assets/svgs/logo.svg';
import hamburgerIcon from '/assets/svgs/icon-hamburger.svg';
import cartIcon from '/assets/svgs/icon-cart.svg';

type HeaderProps = {
  currentPage: string;
};

function Header({ currentPage }: HeaderProps) {
  return (
    <motion.header
      initial={{ backgroundColor: '#191919' }}
      animate={{
        backgroundColor: `${currentPage === '/' ? '#191919' : '#000'}`,
      }}
      transition={{ duration: 1.1 }}
      className='header'
    >
      <motion.section
        className='header__navigation-wrapper'
        initial={{ backgroundColor: '#191919' }}
        animate={{
          backgroundColor: `${currentPage === '/' ? '#191919' : '#000'}`,
        }}
        transition={{ duration: 1.1 }}
      >
        <section className='header__wrapper'>
          <nav className='header__navigation'>
            <button className='btn btn--hamburger'>
              <svg className='icon'>
                <use xlinkHref={`${hamburgerIcon}#icon-hamburger`}></use>
              </svg>
            </button>
            <NavLink to='/'>
              <img src={audiophileLogo} alt='Audiophile logo' />
            </NavLink>
            <ul role='list' className='primary-navigation'>
              {headerNavigation.map((page, index) => (
                <li key={index}>
                  <NavLink to={page.url}>{page.category}</NavLink>
                </li>
              ))}
            </ul>
            <NavLink className='link--cart' to='/checkout'>
              <svg className='icon'>
                <use xlinkHref={`${cartIcon}#icon-cart`}></use>
              </svg>
            </NavLink>
          </nav>
          {currentPage !== '/' && (
            <motion.h3
              key={currentPage}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className='header__currentPage-label'
            >
              {currentPage.slice(1)}
            </motion.h3>
          )}
        </section>
      </motion.section>
      {currentPage === '/' && <Hero />}
    </motion.header>
  );
}
export default Header;
