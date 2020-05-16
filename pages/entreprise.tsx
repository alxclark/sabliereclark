import Head from 'next/head';

import {Hero, Inset, BlockLayout, ContentBlock, Layout} from '../components';

export default function Entreprise() {
  return (
    <>
      <Head>
        <title>Sablière Clark | Notre entreprise</title>
      </Head>

      <main>
        <Hero source="/images/marcel.jpg" title={['Notre', 'entreprise']} />

        <Layout>
          <Inset>
            <BlockLayout>
              <ContentBlock style={{width: '100%'}}>
                <p style={{color: 'black', fontSize: 22}}>
                  En 2017, Excavation Marcel Clark inc, une entreprise familiale
                  de la région de Terrebonne, qui dans le but d’élargir ses
                  activités a fait l’acquisition de la sablière (anciennement
                  propriété de Les Sables Fournel et Fils).
                </p>
              </ContentBlock>
              <ContentBlock style={{width: '100%'}}>
                Opérant sous le nom de <strong>Sablière Clark</strong>, nous
                exploitons désormais une grande variété de produits qui
                n’étaient pas disponibles avant.
                <br />
                <br /> Nous avons fait l’acquisition récemment de nouveaux
                équipements afin d’être en mesure de vous offrir des produits
                variés et de qualité.
                <br />
                <br /> Nouvellement dans le domaine, nous sommes enthousiastes à
                relever ce nouveau défi et fiers de pouvoir vous garantir des
                prix compétitifs.
                <br />
                <br /> Au plaisir de vous servir bientôt.
              </ContentBlock>
            </BlockLayout>
          </Inset>
        </Layout>
      </main>
    </>
  );
}
