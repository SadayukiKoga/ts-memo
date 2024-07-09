import styles from './styles.module.css';

type Props = {
  message: string;
  description: string;
};

export const MyStudyAlert = ({ message, description }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.heading}>{message}</div>
      <div className={styles.description}>
        {description}
        <br />
        教材を確認して開発をしてみましょう！
      </div>
    </div>
  );
};
