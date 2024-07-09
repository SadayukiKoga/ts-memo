import { useDeleteMemo } from './use-delete-memo';
import { useFindMemo } from './use-find-memo';
import { useUpdateMemo } from './use-update-memo';

export const useHooks = (id: string) => {
  const { defaultValues, findError, findStudyError, isLoading } = useFindMemo(id);
  const { updateError, updateStudyError, isUpdating, handleSubmit } = useUpdateMemo(id);
  const { deleteError, deleteStudyError, isDeleting, handleDelete } = useDeleteMemo(id);

  return {
    defaultValues,
    findError,
    findStudyError,
    isLoading,
    updateError,
    updateStudyError,
    isUpdating,
    handleSubmit,
    deleteError,
    deleteStudyError,
    isDeleting,
    handleDelete,
  };
};
