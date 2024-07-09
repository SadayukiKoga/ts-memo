import { useDeleteMemo } from './use-delete-memo';
import { useFetchMemos } from './use-fetch-memos';

export const useHooks = () => {
  const { memos, fetchError, fetchStudyError, isLoading, refetch } = useFetchMemos();
  const { deleteError, deleteStudyError, isDeleting, deleteMemo } = useDeleteMemo();

  const handleDelete = async (id: string) => {
    await deleteMemo({ memoId: id });
    await refetch();
  };

  return { memos, fetchError, fetchStudyError, isLoading, deleteError, deleteStudyError, isDeleting, handleDelete };
};
