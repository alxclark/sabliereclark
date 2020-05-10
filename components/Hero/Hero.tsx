import {Layout} from '../Layout';

import styles from './Hero.module.css';

export interface Props {
  source: string;
  /** Two lines title */
  title: [string, string];
}

export function Hero({source, title}: Props) {
  return (
    <div className={styles.Hero} style={{backgroundImage: `url(${source})`}}>
      <Layout>
        <h1 className={styles.HeroTitle}>
          <div className={styles.one}>{title[0]}</div>
          <div className={styles.two}>{title[1]}</div>
        </h1>
      </Layout>
    </div>
  );
}
