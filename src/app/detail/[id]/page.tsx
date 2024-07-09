'use client';

import { MyAlertMessage } from '~/components/surface/dialogs/alert-message';
import { MyPageContainer } from '~/features/app/components/page-container';
import { MyStudyAlert } from '~/features/app/components/study-alert';
import { MyMemoContainer } from '~/features/memo/components/memo-container';

import { MyMemoActions } from './components/memo-actions';
import { MyMemoDetail } from './components/memo-detail';
import { useHooks } from './hooks';

type Params = {
  id: string;
};

export default function MemoDetailPage({ params }: { params: Params }) {
  const { memo, findError, findStudyError, isLoading, deleteError, deleteStudyError, isDeleting, handleDelete } =
    useHooks(params.id);

  return (
    <MyPageContainer>
      <h1>メモ詳細</h1>
      <MyMemoContainer>
        {findError && <MyAlertMessage color="error">{findError.message}</MyAlertMessage>}
        {deleteError && <MyAlertMessage color="error">{deleteError.message}</MyAlertMessage>}
        {!memo && isLoading && <div>読み込み中...</div>}
        {memo && <MyMemoDetail memo={memo} />}
        <MyMemoActions id={params.id} onClickDelete={handleDelete} isDeleting={isDeleting} />
      </MyMemoContainer>
      {findStudyError && (
        <MyStudyAlert
          message={findStudyError.message}
          description="API (http://localhost:8000/memos/detail/:id) の開発が完了すると「選択したメモの詳細」が表示されるようになります。"
        />
      )}
      {deleteStudyError && (
        <MyStudyAlert
          message={deleteStudyError.message}
          description="API (http://localhost:8000/memos/delete) の開発が完了すると削除ボタンをクリックした際に「選択したメモの変更内容をデータベースから削除」し、「一覧画面に戻る」ようになります。"
        />
      )}
    </MyPageContainer>
  );
}
