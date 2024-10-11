import { Head, Html, Main, NextScript } from 'next/document';

import { Favicons } from '@/components/favicons/favicons';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <Favicons />
      </Head>

      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
