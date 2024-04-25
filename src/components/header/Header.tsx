import { NavLink } from 'react-router-dom';
import {
  useState,
  useEffect,
  useRef,
  MouseEvent as ReactMouseEvent,
} from 'react';
import { motion } from 'framer-motion';
import { headerNavigation } from '../../data/data';
import Hero from '../ui/Hero';
import Navigation from '../ui/Navigation';
import audiophileLogo from '/assets/svgs/logo.svg';
import hamburgerIcon from '/assets/svgs/icon-hamburger.svg';
import cartIcon from '/assets/svgs/icon-cart.svg';

type HeaderProps = {
  currentPage: string;
};

const root = document.getElementById('root') as HTMLDivElement;

function Header({ currentPage }: HeaderProps) {
  const variants = {
    initial: { backgroundColor: '#191919' },
    animate: { backgroundColor: `${currentPage === '/' ? '#191919' : '#000'}` },
  };

  const [openMobileNav, setOpenMobileNav] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  const clearOverlay = () => {
    if (root.hasAttribute('data-overlay')) root.removeAttribute('data-overlay');
  };

  useEffect(() => {
    const handleClick = (event: ReactMouseEvent | MouseEvent) => {
      if (!openMobileNav) return;

      // remove overlay if click is outside of navigation container
      if (
        sectionRef.current &&
        !sectionRef.current.contains(event.target as Node)
      ) {
        root.removeAttribute('data-overlay');
        setOpenMobileNav(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
  }, [openMobileNav]);

  return (
    <motion.header
      initial='initial'
      animate='animate'
      transition={{ duration: 1.1 }}
      variants={variants}
      className='header'
    >
      <motion.section
        className='header__navigation-wrapper'
        initial='initial'
        animate='animate'
        variants={variants}
        transition={{ duration: 1.1 }}
      >
        <section className='header__wrapper' ref={sectionRef}>
          <nav className='header__navigation'>
            <button
              className='btn btn--hamburger'
              onClick={() => {
                if (root.hasAttribute('data-overlay')) {
                  root.removeAttribute('data-overlay');
                  setOpenMobileNav(false);
                  return;
                }
                root.setAttribute('data-overlay', '');
                setOpenMobileNav(true);
              }}
            >
              <svg className='icon'>
                <use xlinkHref={`${hamburgerIcon}#icon-hamburger`}></use>
              </svg>
            </button>
            <NavLink to='/' onClick={clearOverlay}>
              <img src={audiophileLogo} alt='Audiophile logo' />
            </NavLink>
            <ul role='list' className='primary-navigation'>
              {headerNavigation.map((page, index) => (
                <li key={index}>
                  <NavLink to={page.url}>{page.category}</NavLink>
                </li>
              ))}
            </ul>
            <NavLink
              className='link--cart'
              to='/checkout'
              onClick={clearOverlay}
            >
              <svg className='icon'>
                <use xlinkHref={`${cartIcon}#icon-cart`}></use>
              </svg>
            </NavLink>
          </nav>
          <Navigation
            dataAttrName='navigation-mode'
            dataAttrValue='mobile-nav'
            ariaHiddenStatus={openMobileNav}
          />
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
