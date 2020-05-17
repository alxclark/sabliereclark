import GoogleMapReact from 'google-map-react';

import {Layout} from '../Layout';

import styles from './MapHero.module.css';

export interface Props {
  /** Two lines title */
  title: [string, string];
}

export function MapHero({title}: Props) {
  const center = getCenter();

  return (
    <div className={styles.MapHero}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDVT7PTT4_koPOCOIWtYxhdifheceAri1g'}}
        defaultCenter={center}
        defaultZoom={9}
        options={{
          disableDefaultUI: true,
          gestureHandling: 'cooperative',
          scrollwheel: false,
        }}
      >
        <Marker lat={46.226744} lng={-74.090106} />
      </GoogleMapReact>
      <Layout>
        <h1 className={styles.HeroTitle}>
          <div className={styles.one}>{title[0]}</div>
          <div className={styles.two}>{title[1]}</div>
        </h1>
      </Layout>
    </div>
  );
}

function getCenter() {
  if (process.browser) {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (width > 1090) {
      return {lat: 46.35, lng: -74.090106};
    }
  }
  return {lat: 46.6, lng: -74.425};
}

function Marker(_props: {lat: number; lng: number}) {
  return (
    <img
      style={{transform: 'translate(-50%, -100%)'}}
      src="/images/marker.svg"
      alt=""
    />
  );
}
