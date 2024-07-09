import Link from 'next/link';

import { MyButton } from '~/components/elements/buttons/button';

import styles from './styles.module.css';

type Props = {
  id: string;
  onClickDelete: () => void;
  isDeleting?: boolean;
};

export const MyMemoActions = ({ id, onClickDelete, isDeleting }: Props) => {
  return (
    <div className={styles.root}>
      <div>
        <MyButton asChild>
          <Link href="/">一覧に戻る</Link>
        </MyButton>
      </div>
      <div className={styles.actions}>
        <div>
          <MyButton color="secondary" asChild>
            <a href={`/update/${id}`}>編集</a>
          </MyButton>
        </div>
        <div>
          <MyButton onClick={onClickDelete} disabled={isDeleting}>
            {isDeleting ? '削除中' : '削除'}
          </MyButton>
        </div>
      </div>
    </div>
  );
};
