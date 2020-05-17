import path from 'path';

import {GetStaticProps} from 'next';
import Head from 'next/head';

import {readMarkdownFilesFromDir} from '../utilities/markdown';
import {
  Hero,
  ContentBlock,
  Layout,
  Inset,
  BlockLayout,
  Image,
  IconedLink,
} from '../components';
import {Product, Service} from '../utilities/types';

export interface Props {
  products: Product[];
  services: Service[];
}

export default function Home({products, services}: Props) {
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
            <BlockLayout>
              <ContentBlock
                title="Des produits pour tous vos projets"
                buttonLabel="Voir tous nos produits"
                items={products.slice(0, 6).map((product) => product.title)}
                url="/produits"
              >
                Une grande variété de produits est disponible pour tous les
                besoins
              </ContentBlock>
              <Image src="/images/pierre-banner.jpg" />
            </BlockLayout>

            <BlockLayout>
              <Image src="/images/tamiseur.jpg" />
              <ContentBlock
                title="Des services variés"
                buttonLabel="Voir tous nos services"
                items={services.slice(0, 4).map((service) => service.title)}
                url="/services"
              >
                Une grande variété de services est disponible pour tous les
                besoins
              </ContentBlock>
            </BlockLayout>

            <BlockLayout>
              <ContentBlock
                title="Un emplacement de choix"
                buttonLabel="Contactez-nous"
                url="/services"
              >
                <p>Accès direct par l'autoroute 125.</p>
                <br />
                <strong>Sablière Clark</strong>
                <p>1483 Chemin Dufresne</p>
                <p>Notre-Dame De La Merci</p>
                <IconedLink
                  src="/images/phone-icon-blue.svg"
                  href="tel:819-424-5133"
                >
                  (819) 424-5133
                </IconedLink>
              </ContentBlock>
              <Image src="/images/cabin.jpg" />
            </BlockLayout>
          </Inset>
        </Layout>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (_context) => {
  const root = path.resolve(process.cwd());
  const productsRoot = path.join(root, 'content', 'products');
  const servicesRoot = path.join(root, 'content', 'services');

  const products = await readMarkdownFilesFromDir<Product>(productsRoot);
  const services = await readMarkdownFilesFromDir<Service>(servicesRoot);

  return {props: {products, services}};
};
