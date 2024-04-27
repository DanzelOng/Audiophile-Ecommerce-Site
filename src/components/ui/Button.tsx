import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type BtnProps = {
  children: ReactNode;
  type: string;
  href?: string;
  onClick?: () => void;
};

function Button({ children, type, href, onClick }: BtnProps) {
  return href ? (
    <Link to={href} className={`link link--${type}`}>
      {children}
    </Link>
  ) : (
    <button className={`link link--${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
