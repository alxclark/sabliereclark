import Head from 'next/head';

import {Hero, Inset, BlockLayout, ContentBlock, Layout} from '../components';

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

        <Layout>
          <Inset>
            <BlockLayout>
              <ContentBlock
                title="Liste de prix ou soumission (pour un projet en particulier)"
                url="/contact"
                buttonLabel="Contactez-nous"
                style={{width: '100%'}}
              >
                Si vous voulez une liste de prix ou vous avez besoin d'une
                soumission pour un projet en particulier, faites-nous parvenir
                votre demande par courriel.
              </ContentBlock>
              <ContentBlock
                title="Ouverture de compte"
                file="/ouverture-de-compte.pdf"
                buttonLabel="Télécharger le formulaire (PDF)"
                style={{width: '100%'}}
              >
                Afin d'accélérer l'ouverture de votre compte, nous vous
                demandons de remplir au préalable notre formulaire et nous le
                retourner par{' '}
                <a href="mailto:sabliereclark@gmail.com">courriel</a> dans les
                plus brefs délais pour que nous puissions traiter votre demande
                rapidement.
              </ContentBlock>
            </BlockLayout>
          </Inset>
        </Layout>
      </main>
    </>
  );
}
