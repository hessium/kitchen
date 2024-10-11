import type { PropsWithChildren } from 'react';

import type { AppMeta } from '@/shared/types/globals';

import { AppFooter } from '@/components/app-footer/app-footer';
import { AppHeader } from '@/components/app-header/app-header';
import { LayoutMeta } from '@/containers/main-layout/elems/layout-meta';

export interface MainLayoutProps extends PropsWithChildren {
  meta?: AppMeta;
}

export const MainLayout = ({ children, meta }: MainLayoutProps) => {
  console.log('MainLayout');

  return (
    <>
      <LayoutMeta {...meta} />

      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
};
