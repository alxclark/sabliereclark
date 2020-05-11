import Head from 'next/head';

import {Hero, ContentBlock, Layout, Inset} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sablière Clark</title>
      </Head>

      <main>
        <Hero
          source="/images/home.jpg"
          title={['Des produits', 'de qualité']}
        />
        <Layout>
          <Inset>
            <ContentBlock
              title="Des produits pour tous vos projets"
              buttonLabel="Voir tous nos produits"
              url="/produits"
            >
              Une grande variété de produits est disponible pour tous les
              besoins
            </ContentBlock>
          </Inset>
        </Layout>
      </main>
    </>
  );
}
