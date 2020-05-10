import {AppProps} from 'next/app';
import '../global.css';

import {Footer, Header, Layout} from '../components';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
