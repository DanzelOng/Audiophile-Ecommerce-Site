import { ReactNode } from 'react';

type BtnProps = {
  children: ReactNode;
  type: string;
};

function Button({ children, type }: BtnProps) {
  return <button className={`btn btn--${type}`}>{children}</button>;
}
export default Button;
