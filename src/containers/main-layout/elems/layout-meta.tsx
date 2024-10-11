import Head from 'next/head';

import { APP_META } from '@/shared/constants/meta';
import type { AppMeta } from '@/shared/types/globals';

type LayoutMeta = AppMeta;

export const LayoutMeta = ({
  title = APP_META.title,
  description = APP_META.description,
  //TODO добавить картинку как defaultProps и убрать проверку в JSX
  image,
  canonical,
}: LayoutMeta) => (
  <Head>
    <title>{title}</title>
    <meta
      content={description}
      name='description'
    />

    {image && (
      <meta
        content={image}
        name='image'
      />
    )}

    {canonical && (
      <link
        href={canonical}
        rel='canonical'
      />
    )}

    {process.env.NEXT_STAND === 'dev' && (
      <meta
        content='noindex, nofollow'
        name='robots'
      />
    )}

    <meta
      content='width=device-width, initial-scale=1'
      name='viewport'
    />
  </Head>
);
