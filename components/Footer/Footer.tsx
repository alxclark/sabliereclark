import {Layout} from '../Layout';

import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <Layout>
        <img className={styles.Logo} src="/images/logo.svg" alt="" />
        <hr />
        <ul>
          <li>
            <img src="/images/email-icon.svg" alt="Adresse courriel" />
            <a href="mailto:sabliereclark@gmail.com">sabliereclark@gmail.com</a>
          </li>
          <li>
            <img src="/images/phone-icon.svg" alt="Téléphone" />
            <a href="tel:514-821-4242">(514) 821-4242</a>
          </li>
          <li>
            <img src="/images/map-icon.svg" alt="Adresse" />
            <a href="https://goo.gl/maps/bYxKmMPLn6o">
              1483 Chemin Dufresne, Notre-Dame de la Merci
            </a>
          </li>
        </ul>
      </Layout>
    </footer>
  );
}
