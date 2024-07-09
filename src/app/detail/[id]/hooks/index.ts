import { useDeleteMemo } from './use-delete-memo';
import { useFindMemo } from './use-find-memo';

export const useHooks = (id: string) => {
  const { memo, findError, findStudyError, isLoading } = useFindMemo(id);
  const { deleteError, deleteStudyError, isDeleting, handleDelete } = useDeleteMemo(id);

  return { memo, findError, findStudyError, isLoading, deleteError, deleteStudyError, isDeleting, handleDelete };
};
