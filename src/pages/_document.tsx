import { Head, Html, Main, NextScript } from 'next/document';

import { BaseMeta } from '@/components/base-meta/base-meta';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <BaseMeta />
      </Head>

      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
