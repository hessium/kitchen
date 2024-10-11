import type { PropsWithChildren } from 'react';

import { AppHeader } from '@/components/app-header/app-header';

interface MainLayoutProps extends PropsWithChildren {}

export const MainLayout = ({ children }: MainLayoutProps) => {
  console.log('MainLayout');

  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};
