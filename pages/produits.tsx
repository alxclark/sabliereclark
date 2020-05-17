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
import {Product} from '../utilities/types';

export interface Props {
  products: Product[];
}

export default function Produits({products}: Props) {
  return (
    <>
      <Head>
        <title>Sablière Clark | Nos produits</title>
      </Head>

      <main>
        <Hero source="/images/pierre-banner.jpg" title={['Nos', 'produits']} />

        <Layout>
          <Inset>
            <BlockLayout
              style={{display: 'flex', flexWrap: 'wrap', overflow: 'hidden'}}
            >
              {products.map((product) => (
                <ContentBlock
                  key={product.title}
                  title={product.title}
                  style={{
                    width: 300,
                    flexGrow: 1,
                    boxShadow: '0 0 0 1px #e5e5e5',
                    background: 'white',
                  }}
                  info={product.info}
                  items={product.items}
                >
                  {product.description}
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
  const productsRoot = path.join(root, 'content', 'products');
  const products = await readMarkdownFilesFromDir<Product>(productsRoot);
  return {props: {products}};
};
