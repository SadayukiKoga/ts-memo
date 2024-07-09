import clsx from 'clsx';

import styles from './styles.module.css';

type ColorOptions = 'primary';

type Props = {
  color?: ColorOptions;
  children: React.ReactNode;
};

export const MyPanel = ({ color, children }: Props) => {
  return (
    <div className={clsx([styles.root, color && styles[color]])}>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
