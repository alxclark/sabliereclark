import Link from 'next/link';

import styles from './ContentBlock.module.css';

export interface Props {
  title?: string;
  items?: string[];
  url?: string;
  buttonLabel?: string;
  unsafe?: string;
  subdued?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  file?: string;
  info?: string;
}

export function ContentBlock({
  title,
  items,
  url,
  buttonLabel,
  unsafe,
  subdued,
  children = null,
  className,
  style,
  file,
  info,
}: Props) {
  const Title = () => title && <h2 className={styles.Title}>{title}</h2>;
  const List = () =>
    items && (
      <ul className={styles.List}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  const Button = () =>
    buttonLabel &&
    // eslint-disable-next-line no-nested-ternary
    (url ? (
      <Link href={url}>
        <a className={styles.Button}>{buttonLabel}</a>
      </Link>
    ) : file ? (
      <a
        href={file}
        className={styles.Button}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonLabel}
      </a>
    ) : null);
  const Unsafe = () =>
    unsafe && (
      <div
        className={styles.Unsafe}
        dangerouslySetInnerHTML={{__html: unsafe}}
      />
    );
  const Subdued = () => subdued && <p className={styles.Subdued}>{subdued}</p>;
  const Info = () => info && <p className={styles.Info}>{info}</p>;
  const Children = () =>
    children && <p className={styles.Children}>{children}</p>;

  return (
    <div className={`${className} ${styles.ContentBlock}`} style={style}>
      <Title />
      <Info />
      <Children />
      <Unsafe />
      <List />
      <Subdued />
      <Button />
    </div>
  );
}
