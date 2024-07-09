import Link from 'next/link';

import { MyButton } from '~/components/elements/buttons/button';
import { MemoUiModel } from '~/features/memo/ui-models/memo';

import styles from './styles.module.css';

type Props = {
  memos: MemoUiModel[];
  onClickDelete: (id: string) => void;
  isDeleting?: boolean;
};

export const MyMemoList = ({ memos, onClickDelete, isDeleting }: Props) => {
  if (!memos.length) {
    return <div>メモがありません。作成をしてメモを残しましょう！</div>;
  }

  return (
    <ul className={styles.root}>
      {memos.map((memo) => (
        <li key={memo.id} className={styles.memo}>
          <div className={styles.body}>
            <div className={styles.sub}>
              <div className={styles.datetime}>{memo.createdAt}</div>
            </div>
            <Link href={`/detail/${memo.id}`} className={styles.content}>
              {memo.title}
            </Link>
          </div>
          <div className={styles.actions}>
            <div>
              <MyButton color="secondary" size="small" asChild>
                <a href={`/update/${memo.id}`}>編集</a>
              </MyButton>
            </div>
            <div>
              <MyButton size="small" onClick={() => onClickDelete(memo.id)} disabled={isDeleting}>
                {isDeleting ? '削除中' : '削除'}
              </MyButton>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
