import type { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {}

export const Button = ({ children }: ButtonProps) => {
  console.log('Button');
  return <button>{children}</button>;
};
