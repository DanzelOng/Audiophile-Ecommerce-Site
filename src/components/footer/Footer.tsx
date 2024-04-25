import { Link } from 'react-router-dom';
import { headerNavigation } from '../../data/data';
import audiophileLogo from '/assets/svgs/logo.svg';
import SocialLinks from '../ui/SocialLinks';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper container'>
        <Link className='footer__logo' to='/'>
          <img src={audiophileLogo} alt='Audiophile logo' />
        </Link>
        <nav className='footer__navigation'>
          <ul
            className='footer__page-links'
            role='list'
            aria-label='Page Links'
          >
            {headerNavigation.map((page, index) => (
              <li key={index}>
                <Link to={page.url}>{page.category}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className='footer__company-description'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <span className='footer__copyright'>
          &copy; {new Date().getFullYear()}. All Rights Reserved
        </span>
        <SocialLinks className='footer__social-links' />
      </div>
    </footer>
  );
}

export default Footer;
