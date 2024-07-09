import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useDeleteMemoApi } from '~/features/memo/hooks/use-delete-memo-api';

export const useDeleteMemo = (id: string) => {
  const router = useRouter();

  const { success, error, studyError, isDeleting, deleteMemo } = useDeleteMemoApi();

  const handleDelete = () => {
    deleteMemo({ memoId: id });
  };

  useEffect(() => {
    if (!success) return;
    router.push('/');
  }, [success]);

  return { deleteError: error, deleteStudyError: studyError, isDeleting, handleDelete };
};
