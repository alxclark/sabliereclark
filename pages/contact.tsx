import Head from 'next/head';

import {Hero} from '../components';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Sablière Clark | Contact</title>
      </Head>

      <main>
        <Hero
          source="/images/pierre-banner.jpg"
          title={['Contactez', 'nous']}
        />
      </main>
    </>
  );
}
