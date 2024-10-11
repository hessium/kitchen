import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { AppHeader } from '@/components/app-header/app-header';
import { LayoutMeta } from '@/containers/main-layout/elems/layout-meta';

export interface MainLayoutProps extends PropsWithChildren {
  meta?: Metadata;
}

export const MainLayout = ({ children, meta }: MainLayoutProps) => {
  console.log('MainLayout');

  return (
    <>
      <LayoutMeta {...meta} />

      <AppHeader />
      {children}
    </>
  );
};
