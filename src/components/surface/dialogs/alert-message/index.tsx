import clsx from 'clsx';

import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  color?: 'success' | 'error';
};

export const MyAlertMessage = ({ children, color = 'success' }: Props) => {
  return (
    <div className={clsx([styles.root, styles[color]])} role="alert">
      {children}
    </div>
  );
};
