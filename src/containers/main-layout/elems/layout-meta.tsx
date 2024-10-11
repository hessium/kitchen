import Head from 'next/head';

import { APP_META } from '@/shared/constants/meta';

import type { MainLayoutProps } from '@/containers/main-layout/main-layout';

type LayoutMeta = MainLayoutProps['meta'];

export const LayoutMeta = ({
  title = APP_META.title,
  description = APP_META.description,
}: LayoutMeta) => (
  <Head>
    <title>{title}</title>
    <meta
      content={description}
      name='description'
    />
    {process.env.NEXT_STAND === 'dev' && (
      <meta
        content='noindex, nofollow'
        name='robots'
      />
    )}
  </Head>
);
