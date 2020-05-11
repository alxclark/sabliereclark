import Head from 'next/head';

import {Hero} from '../components';

export default function OuvertureCompte() {
  return (
    <>
      <Head>
        <title>Sablière Clark | Ouverture de compte</title>
      </Head>

      <main>
        <Hero
          source="/images/tas-sable.jpg"
          title={['Ouverture', 'de compte']}
        />
      </main>
    </>
  );
}
