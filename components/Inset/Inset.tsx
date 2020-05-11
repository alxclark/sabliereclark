import styles from './Inset.module.css';

export interface Props {
  children: React.ReactNode;
}

export function Inset({children}: Props) {
  return <div className={styles.Inset}>{children}</div>;
}
