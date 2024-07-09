import { useEffect, useState } from 'react';

import { useGetFetch } from '~/features/app/hooks/use-get-fetch';
import { MemoUiModel } from '~/features/memo/ui-models/memo';

type ApiResponseData = { id: string; title: string; createdAt: string };

export const useFetchMemosApi = () => {
  const [memos, setMemos] = useState<MemoUiModel[]>([]);

  const { data, error, studyError, isLoading, query } = useGetFetch<ApiResponseData[]>('http://localhost:8000/memos');

  useEffect(() => {
    if (!data) return;
    const memos = convertToUiModel(data);

    setMemos(memos);
  }, [data]);

  return { memos, error, studyError, isLoading, query };
};

const convertToUiModel = (data: ApiResponseData[]): MemoUiModel[] => {
  return data.map((memo) => ({ id: memo.id, title: memo.title, createdAt: memo.createdAt }));
};
