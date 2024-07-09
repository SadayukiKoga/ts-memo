import Link from 'next/link';

import { MyButton } from '~/components/elements/buttons/button';

import styles from './styles.module.css';

type Props = {
  onClickDelete: () => void;
  isDeleting?: boolean;
};

export const MyMemoActions = ({ onClickDelete, isDeleting }: Props) => {
  return (
    <div className={styles.root}>
      <div>
        <MyButton asChild>
          <Link href="/">一覧に戻る</Link>
        </MyButton>
      </div>
      <div>
        <MyButton onClick={onClickDelete} disabled={isDeleting}>
          {isDeleting ? '削除中' : '削除'}
        </MyButton>
      </div>
    </div>
  );
};
