'use client';

import Link from 'next/link';

import { MyButton } from '~/components/elements/buttons/button';
import { MyAlertMessage } from '~/components/surface/dialogs/alert-message';
import { MyPageContainer } from '~/features/app/components/page-container';
import { MyStudyAlert } from '~/features/app/components/study-alert';

import { MyMemoList } from './components/memo-list';
import { useHooks } from './hooks';

export default function HomePage() {
  const { memos, fetchError, fetchStudyError, isLoading, deleteError, deleteStudyError, isDeleting, handleDelete } =
    useHooks();

  return (
    <MyPageContainer>
      <h1>メモ一覧</h1>
      {fetchError && <MyAlertMessage color="error">{fetchError.message}</MyAlertMessage>}
      {deleteError && <MyAlertMessage color="error">{deleteError.message}</MyAlertMessage>}
      {isLoading ? (
        <div>読み込み中...</div>
      ) : (
        <MyMemoList memos={memos} onClickDelete={handleDelete} isDeleting={isDeleting} />
      )}
      <div>
        <MyButton color="secondary" asChild>
          <Link href="/create">メモを作成する</Link>
        </MyButton>
      </div>
      {fetchStudyError && (
        <MyStudyAlert
          message={fetchStudyError.message}
          description="API (http://localhost:8000/memos) の開発が完了すると「メモの一覧」が表示されるようになります。"
        />
      )}
      {deleteStudyError && (
        <MyStudyAlert
          message={deleteStudyError.message}
          description="API (http://localhost:8000/memos/delete) の開発が完了すると削除ボタンをクリックした際に「選択したメモの変更内容をデータベースから削除」できるようになります。"
        />
      )}
    </MyPageContainer>
  );
}
