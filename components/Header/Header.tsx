import Link from 'next/link';

import {Layout} from '../Layout';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.Header}>
      <Layout className={styles.Layout}>
        <Link href="/">
          <a className={styles.Logo}>
            <img src="/images/logo.svg" alt="Sablière Clark" />
          </a>
        </Link>
        <ul className={styles.Links}>
          <li>
            <Link href="/produits">
              <a>Produits</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/entreprise">
              <a>Entreprise</a>
            </Link>
          </li>
          <li>
            <Link href="/ouverture-compte">
              <a>Ouverture de compte</a>
            </Link>
          </li>
          <li className={styles.highlight}>
            <Link href="/contact">
              <a>Nous joindre →</a>
            </Link>
          </li>
        </ul>
      </Layout>
    </header>
  );
}
