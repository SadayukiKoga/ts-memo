import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

export const MyPageContainer = ({ children }: Props) => {
  return <section className={styles.root}>{children}</section>;
};
