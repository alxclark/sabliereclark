import Head from 'next/head';

import {Hero} from '../components';

export default function Produits() {
  return (
    <>
      <Head>
        <title>Sablière Clark | Nos produits</title>
      </Head>

      <main>
        <Hero source="/images/pierre-banner.jpg" title={['Nos', 'produits']} />
      </main>
    </>
  );
}
