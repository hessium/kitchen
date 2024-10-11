import { APP_META } from '@/shared/constants/meta';

export const BaseMeta = () => (
  <>
    <title>{APP_META.title}</title>
    <meta
      content={APP_META.description}
      name='description'
    />

    <meta
      content='width=device-width, initial-scale=1'
      name='viewport'
    />

    <link
      href='/images/favicon/favicon.ico'
      rel='icon'
      sizes='any'
    />
    <meta
      content='#4a4a4a'
      name='theme-color'
    />
  </>
);
