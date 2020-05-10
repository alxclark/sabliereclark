import Head from 'next/head';

import {Hero} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sablière Clark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          source="/images/home.jpg"
          title={['Des produits', 'de qualité']}
        />
      </main>
    </>
  );
}
