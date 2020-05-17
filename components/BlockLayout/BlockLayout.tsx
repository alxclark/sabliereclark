import styles from './BlockLayout.module.css';

export interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function BlockLayout({children, style}: Props) {
  return (
    <div className={styles.BlockLayout} style={style}>
      {children}
    </div>
  );
}
