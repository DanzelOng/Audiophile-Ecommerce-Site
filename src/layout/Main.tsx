import { ReactNode } from 'react';

type MainProps = {
  className?: string;
  children: ReactNode;
};

function Main({ className, children }: MainProps) {
  return <main className={`container ${className || ''}`}>{children}</main>;
}
export default Main;
