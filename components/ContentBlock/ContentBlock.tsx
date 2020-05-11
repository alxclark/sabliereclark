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
}: Props) {
  const Title = () => title && <h2>{title}</h2>;
  const List = () =>
    items && (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  const Button = () =>
    buttonLabel && (
      <Link href={url}>
        <a>{buttonLabel}</a>
      </Link>
    );
  const Unsafe = () =>
    unsafe && <div dangerouslySetInnerHTML={{__html: unsafe}} />;
  const Subdued = () => subdued && <p>{subdued}</p>;
  const Children = () => children && <p>{children}</p>;

  return (
    <div className={`${className} ${styles.ContentBlock}`}>
      <Title />
      <Children />
      <Unsafe />
      <List />
      <Subdued />
      <Button />
    </div>
  );
}
