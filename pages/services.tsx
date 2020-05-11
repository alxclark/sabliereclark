import Head from 'next/head';

import {Hero} from '../components';

export default function Services() {
  return (
    <>
      <Head>
        <title>Sablière Clark | Nos services</title>
      </Head>

      <main>
        <Hero source="/images/tamiseur.jpg" title={['Nos', 'services']} />
      </main>
    </>
  );
}
