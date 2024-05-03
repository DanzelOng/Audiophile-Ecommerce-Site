import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type BtnProps = {
  children: ReactNode;
  type: string;
  href?: string;
  ariaLabel?: string;
  ariaControls?: string;
  className?: string;
  itemsCount?: number;
  onClick?: () => void;
};

function Button({
  children,
  type,
  href,
  ariaLabel,
  ariaControls,
  itemsCount,
  className,
  onClick,
}: BtnProps) {
  return href ? (
    <Link
      to={href}
      className={`link link--${type} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      onClick={onClick}
      data-itemscount={itemsCount}
      className={`btn btn--${type} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
