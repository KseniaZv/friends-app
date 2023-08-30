import styles from './styles.module.scss';

interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return <h1 className={styles['title']}>{text}</h1>;
}
