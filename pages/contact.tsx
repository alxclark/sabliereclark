import Head from 'next/head';
// import GoogleMapReact from 'google-map-react';

// eslint-disable-next-line shopify/strict-component-boundaries
import {MapHero} from '../components/MapHero';
import {
  Layout,
  Inset,
  ContentBlock,
  IconedLink,
  BlockLayout,
} from '../components';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Sablière Clark | Contact</title>
      </Head>

      <main>
        <MapHero title={['Contactez', 'nous']} />
        <Layout>
          <Inset>
            <BlockLayout>
              <div style={{width: '100%'}}>
                <ContentBlock title="Sablière Clark">
                  1483 Chemin Dufresne
                  <br /> Notre-Dame De La Merci
                  <IconedLink
                    src="/images/phone-icon-blue.svg"
                    href="tel:819-424-5133"
                  >
                    (819) 424-5133
                  </IconedLink>
                  <IconedLink
                    src="/images/email-icon-blue.svg"
                    href="mailto:sabliereclark@gmail.com"
                  >
                    sabliereclark@gmail.com
                  </IconedLink>
                </ContentBlock>
                <ContentBlock title="Éric Clark">
                  Directeur des opérations
                  <IconedLink
                    src="/images/phone-icon-blue.svg"
                    href="tel:514-821-4242"
                  >
                    (514) 821-4242
                  </IconedLink>
                </ContentBlock>
                <ContentBlock title="Joël Clark">
                  Vice-président
                  <IconedLink
                    src="/images/phone-icon-blue.svg"
                    href="tel:514-821-4406"
                  >
                    (514) 821-4406
                  </IconedLink>
                </ContentBlock>
              </div>
              <div style={{width: '100%'}}>
                <ContentBlock title="Excavation Marcel Clark inc.">
                  505 rue Léon Martel
                  <br />
                  Terrebonne, Québec
                  <br />
                  J6W 2J9
                  <IconedLink
                    src="/images/phone-icon-blue.svg"
                    href="tel:450-471-4985"
                  >
                    (450) 471-4985
                  </IconedLink>
                  <IconedLink
                    src="/images/fax-icon.svg"
                    href="tel:450-492-5082"
                  >
                    (450) 492-5082
                  </IconedLink>
                  <IconedLink
                    src="/images/email-icon-blue.svg"
                    href="mailto:excavation_m.clark@hotmail.com"
                  >
                    excavation_m.clark@hotmail.com
                  </IconedLink>
                </ContentBlock>
                <ContentBlock title="Sylvie Bouchard">
                  Comptabilité
                  <IconedLink
                    src="/images/phone-icon-blue.svg"
                    href="tel:450-964-2425"
                  >
                    (450) 964-2425
                  </IconedLink>
                </ContentBlock>
                <ContentBlock title="Heures d'ouverture">
                  Lundi-vendredi: 7h30 à 16h30
                </ContentBlock>
              </div>
            </BlockLayout>
          </Inset>
        </Layout>
      </main>
    </>
  );
}
