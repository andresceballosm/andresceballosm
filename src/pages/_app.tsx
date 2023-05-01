import React from 'react';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../stores/store';
import '../css/main.css';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const title = 'andresceballos';

  const description = 'andresceballosm - Web Application';

  const image =
    'https://firebasestorage.googleapis.com/v0/b/commentup-prod.appspot.com/o/images%2Fa.png?alt=media&token=f0f0372b-2cb4-4c90-b5fc-77e285696740';

  const imageWidth = '1920';

  const imageHeight = '960';

  return (
    <Provider store={store}>
      <>
        <Head>
          <meta name="description" content={description} />

          <meta property="og:site_name" content="andresceballosm" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content={imageWidth} />
          <meta property="og:image:height" content={imageHeight} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image:src" content={image} />
          <meta property="twitter:image:width" content={imageWidth} />
          <meta property="twitter:image:height" content={imageHeight} />

          <link rel="icon" href="/logo.png" />
        </Head>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </>
      ,
    </Provider>
  );
}

export default MyApp;
