import styles from './Image.module.css';

export interface Props {
  src: string;
  alt?: string;
}

export function Image({src, alt = ''}: Props) {
  return (
    <div className={styles.ImageContainer}>
      <img src={src} alt={alt} />
    </div>
  );
}
