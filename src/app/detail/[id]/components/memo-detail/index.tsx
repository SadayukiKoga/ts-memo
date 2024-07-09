import { MyMultilineString } from '~/components/elements/typographies/multiline-string';
import { MyPanel } from '~/components/surface/panels/panel';
import { MemoDetailUiModel } from '~/features/memo/ui-models/memo';

import styles from './styles.module.css';

type Props = { memo: MemoDetailUiModel };

export const MyMemoDetail = ({ memo }: Props) => {
  return (
    <MyPanel>
      <div className={styles.field}>
        <div className={styles.label}>タイトル</div>
        <div>
          <MyMultilineString value={memo.title} />
        </div>
      </div>
      <div className={styles.field}>
        <div className={styles.label}>内容</div>
        <div>
          <MyMultilineString value={memo.content} />
        </div>
      </div>
      <div className={styles.field}>
        <div className={styles.label}>作成日時</div>
        <div>{memo.createdAt}</div>
      </div>
      <div className={styles.field}>
        <div className={styles.label}>更新日時</div>
        <div>{memo.updatedAt}</div>
      </div>
    </MyPanel>
  );
};
