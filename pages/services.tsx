import path from 'path';

import {GetStaticProps} from 'next';
import Head from 'next/head';

import {
  Hero,
  ContentBlock,
  Layout,
  Inset,
  BlockLayout,
  Image,
} from '../components';
import {readMarkdownFilesFromDir} from '../utilities/markdown';
import {Service} from '../utilities/types';

export interface Props {
  services: Service[];
}

export default function Services({services}: Props) {
  return (
    <>
      <Head>
        <title>Sablière Clark | Nos services</title>
      </Head>

      <main>
        <Hero source="/images/tamiseur.jpg" title={['Nos', 'services']} />

        <Layout>
          <Inset>
            <BlockLayout
              style={{display: 'flex', flexWrap: 'wrap', overflow: 'hidden'}}
            >
              {services.map((service) => (
                <ContentBlock
                  key={service.title}
                  title={service.title}
                  style={{
                    width: 300,
                    flexGrow: 1,
                    boxShadow: '0 0 0 1px #e5e5e5',
                    background: 'white',
                  }}
                  items={service.items}
                  unsafe={service.unsafe}
                  subdued={service.subdued}
                >
                  {service.description}
                </ContentBlock>
              ))}
            </BlockLayout>
          </Inset>
        </Layout>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (_context) => {
  const root = path.resolve(process.cwd());
  const servicesRoot = path.join(root, 'content', 'services');
  const services = await readMarkdownFilesFromDir<Service>(servicesRoot);
  return {props: {services}};
};
