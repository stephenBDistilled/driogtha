import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { PageTitle } from '@driogtha/ui-header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to countries!</title>
      </Head>
      <PageTitle />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
