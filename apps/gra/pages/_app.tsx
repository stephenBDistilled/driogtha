import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { UiHeader } from '@driogtha/ui-header';
import { UiFooter } from '@driogtha/ui-footer';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>&#9829;</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UiHeader domain="Grá" />
      <main className="app">
        <Component {...pageProps} />
      </main>
      <UiFooter />
    </>
  );
}

export default CustomApp;
