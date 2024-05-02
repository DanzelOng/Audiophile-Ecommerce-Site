import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type BtnProps = {
  children: ReactNode;
  type: string;
  href?: string;
  ariaLabel?: string;
  ariaControls?: string;
  onClick?: () => void;
};

function Button({
  children,
  type,
  href,
  ariaLabel,
  ariaControls,
  onClick,
}: BtnProps) {
  return href ? (
    <Link to={href} className={`link link--${type}`} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      onClick={onClick}
      className={`btn btn--${type}`}
    >
      {children}
    </button>
  );
}

export default Button;
