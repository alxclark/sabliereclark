import styles from './IconedLink.module.css';

export interface Props {
  href: string;
  src: string;
  children: React.ReactNode;
}

export function IconedLink({href, children, src}: Props) {
  return (
    <a href={href} className={styles.Link}>
      <img className={styles.Image} src={src} alt="" />
      {children}
    </a>
  );
}
