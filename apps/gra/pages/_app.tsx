import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { UiHeader } from '@driogtha/ui-header';
import { UiFooter } from '@driogtha/ui-footer';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to gra!</title>
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
