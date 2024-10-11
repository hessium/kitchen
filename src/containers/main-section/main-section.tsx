import type { PropsWithChildren } from 'react';

interface MainSectionProps extends PropsWithChildren {}

export const MainSection = ({ children }: MainSectionProps) => {
  console.log('MAIN-SECTION');

  return <section>{children}</section>;
};
