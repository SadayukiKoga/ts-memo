'use client';

import Link from 'next/link';

import { MyButton } from '~/components/elements/buttons/button';
import { MyAlertMessage } from '~/components/surface/dialogs/alert-message';
import { MyPageContainer } from '~/features/app/components/page-container';
import { MyStudyAlert } from '~/features/app/components/study-alert';
import { MyMemoContainer } from '~/features/memo/components/memo-container';

import { MyCreateMemoForm } from './components/create-memo-form';
import { useHooks } from './hooks';

export default function MemoCreatePage() {
  const { error, studyError, isCreating, handleSubmit } = useHooks();
  return (
    <MyPageContainer>
      <h1>新規メモ作成</h1>
      <MyMemoContainer>
        {error && <MyAlertMessage color="error">{error.message}</MyAlertMessage>}
        <MyCreateMemoForm isSubmitting={isCreating} onSubmit={handleSubmit} />
        <div>
          <MyButton asChild>
            <Link href="/">一覧に戻る</Link>
          </MyButton>
        </div>
      </MyMemoContainer>
      {studyError && (
        <MyStudyAlert
          message={studyError.message}
          description="API (http://localhost:8000/memos/create) の開発が完了すると作成ボタンをクリックした際に「新規メモをデータベースに登録」し、「一覧画面に戻る」ようになります。"
        />
      )}
    </MyPageContainer>
  );
}
