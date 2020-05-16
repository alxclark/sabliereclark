import styles from './BlockLayout.module.css';

export interface Props {
  children: React.ReactNode;
}

export function BlockLayout({children}: Props) {
  return <div className={styles.BlockLayout}>{children}</div>;
}
