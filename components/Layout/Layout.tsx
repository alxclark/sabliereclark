import styles from './Layout.module.css';

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Layout({children, className}: Props) {
  return <div className={`${styles.Layout} ${className}`}>{children}</div>;
}
