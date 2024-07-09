import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useCreateMemoApi } from '~/features/memo/hooks/use-create-memo-api';

export const useHooks = () => {
  const router = useRouter();
  const { success, error, studyError, isCreating, createMemo } = useCreateMemoApi();

  const handleSubmit = (title: string, content: string) => {
    createMemo({ title, content });
  };

  useEffect(() => {
    if (!success) return;
    router.push('/');
  }, [success]);

  return { error, studyError, isCreating, handleSubmit };
};
