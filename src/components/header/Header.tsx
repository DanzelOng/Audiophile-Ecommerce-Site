import { NavLink } from 'react-router-dom';
import {
  useState,
  useEffect,
  useRef,
  MouseEvent as ReactMouseEvent,
} from 'react';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { headerNavigation } from '../../data/data';
import useCart from '../../context/CartContext';
import Cart from '../ui/Cart';
import Hero from '../ui/Hero';
import Button from '../ui/Button';
import Navigation from '../ui/Navigation';
import audiophileLogo from '/assets/svgs/logo.svg';
import headerIcons from '/assets/svgs/headerIcons.svg';
import checkOverlays from '../../utils/overlays';
import Order from '../ui/Order';

type HeaderProps = {
  currentPage: string;
  setOrderOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orderOpen: boolean;
};

type PageLabels = {
  [key: string]: boolean;
};

const pageLabels: PageLabels = {
  '/speakers': true,
  '/headphones': true,
  '/earphones': true,
};

const root = document.getElementById('root') as HTMLDivElement;

function Header({ currentPage, setOrderOpen, orderOpen }: HeaderProps) {
  const variants = {
    initial: { backgroundColor: '#191919' },
    animate: { backgroundColor: `${currentPage === '/' ? '#191919' : '#000'}` },
  };

  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { cart } = useCart();
  const emptyCart = cart.every((item) => item.qty === 0);

  useEffect(() => {
    const handleClick = (event: ReactMouseEvent | MouseEvent) => {
      // remove data overlay if click is outside of navigation container
      if (
        sectionRef.current &&
        !sectionRef.current.contains(event.target as Node)
      ) {
        root.removeAttribute('data-overlay');
        setOpenMobileNav(false);
        if (root.hasAttribute('cart-overlay')) {
          root.removeAttribute('cart-overlay');
          setOpenCart(false);
        }
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
              aria-label='open mobile navigation'
              aria-controls='mobile-nav-svg'
              className='btn btn--hamburger'
              onClick={() => {
                if (root.hasAttribute('cart-overlay')) {
                  root.removeAttribute('cart-overlay');
                  setOpenCart(false);
                }
                root.hasAttribute('data-overlay')
                  ? root.removeAttribute('data-overlay')
                  : root.setAttribute('data-overlay', '');
                setOpenMobileNav((state) => !state);
              }}
            >
              <svg
                className={`icon icon--hamburger ${
                  openMobileNav ? 'hide' : ''
                }`}
                id='mobile-nav-svg'
                aria-hidden={root.hasAttribute('data-overlay') && openMobileNav}
              >
                <use xlinkHref={`${headerIcons}#icon-hamburger`}></use>
              </svg>
              <svg
                className={`icon icon--close ${!openMobileNav ? 'hide' : ''}`}
                id='mobile-nav-svg'
                aria-hidden={
                  !root.hasAttribute('data-overlay') && !openMobileNav
                }
              >
                <use xlinkHref={`${headerIcons}#icon-close`}></use>
              </svg>
            </button>
            <NavLink
              to='/'
              onClick={() => {
                checkOverlays(root, setOpenCart, setOpenMobileNav);
              }}
            >
              <img src={audiophileLogo} alt='Audiophile logo' />
            </NavLink>
            <ul role='list' className='primary-navigation'>
              {headerNavigation.map((page, index) => (
                <li
                  key={index}
                  onClick={() => {
                    checkOverlays(root, setOpenCart, setOpenMobileNav);
                  }}
                >
                  <NavLink to={page.url}>{page.category}</NavLink>
                </li>
              ))}
            </ul>
            <Button
              type='cart'
              ariaLabel='open cart modal'
              ariaControls='cart'
              itemsCount={
                !emptyCart
                  ? cart.reduce(
                      (acc, item) => (item.qty !== 0 ? acc + 1 : acc),
                      0
                    )
                  : 0
              }
              className={`${!emptyCart ? 'hasItems' : ''}`}
              onClick={() => {
                if (root.hasAttribute('data-overlay')) {
                  root.removeAttribute('data-overlay');
                  setOpenMobileNav(false);
                }
                root.hasAttribute('cart-overlay')
                  ? root.removeAttribute('cart-overlay')
                  : root.setAttribute('cart-overlay', '');
                setOpenCart((mode) => !mode);
              }}
            >
              <svg className='icon icon--cart' id='cart'>
                <use xlinkHref={`${headerIcons}#icon-cart`}></use>
              </svg>
            </Button>
          </nav>
          <AnimatePresence>
            {openCart && <Cart setOpenCart={setOpenCart} />}
            {orderOpen && <Order setOrderOpen={setOrderOpen} />}
          </AnimatePresence>
          <Navigation
            dataAttrName='navigation-mode'
            dataAttrValue='mobile-nav'
            ariaHiddenStatus={openMobileNav}
            setOpenMobileNav={setOpenMobileNav}
          />
          {pageLabels[currentPage] && (
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
          <Toaster
            position='top-left'
            containerStyle={{
              top: 70,
              left: 0,
              position: 'absolute',
            }}
          />
        </section>
      </motion.section>
      {currentPage === '/' && <Hero />}
    </motion.header>
  );
}

export default Header;
