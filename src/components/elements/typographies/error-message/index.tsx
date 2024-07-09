import styles from './styles.module.css';

type Props = {
  message: string;
  id?: string;
};

export const MyErrorMessage = ({ id, message }: Props) => {
  return (
    <div id={id} className={styles.root} role="alert">
      {message}
    </div>
  );
};
