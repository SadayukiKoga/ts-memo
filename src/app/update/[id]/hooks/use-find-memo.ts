import { useEffect, useState } from 'react';

import { DefaultValues } from '~/app/update/[id]/components/update-memo-form';
import { useFindMemoApi } from '~/features/memo/hooks/use-find-memo-api';

export const useFindMemo = (id: string) => {
  const [defaultValues, setDefaultValues] = useState<DefaultValues | null>();

  const { memo, error, studyError, isLoading, query } = useFindMemoApi(id);

  useEffect(() => {
    query();
  }, []);

  useEffect(() => {
    if (!memo) return;
    setDefaultValues({ title: memo.title, content: memo.content });
  }, [memo]);

  return { defaultValues, findError: error, findStudyError: studyError, isLoading };
};
