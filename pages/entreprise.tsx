import Head from 'next/head';

import {Hero} from '../components';

export default function Entreprise() {
  return (
    <>
      <Head>
        <title>Sablière Clark | Notre entreprise</title>
      </Head>

      <main>
        <Hero source="/images/marcel.jpg" title={['Notre', 'entreprise']} />
      </main>
    </>
  );
}
