import { useEffect, useState } from 'react';

import { useGetFetch } from '~/features/app/hooks/use-get-fetch';
import { MemoDetailUiModel } from '~/features/memo/ui-models/memo';

type ApiResponseData = { id: string; title: string; content: string; createdAt: string; updatedAt: string };

export const useFindMemoApi = (id: string) => {
  const [memo, setMemo] = useState<MemoDetailUiModel | null>(null);

  const { data, error, studyError, isLoading, query } = useGetFetch<ApiResponseData>(
    `http://localhost:8000/memos/detail/${id}`,
  );

  useEffect(() => {
    if (!data) return;

    setMemo(convertToUiModel(data));
  }, [data]);

  return { memo, error, studyError, isLoading, query };
};

const convertToUiModel = (data: ApiResponseData): MemoDetailUiModel => {
  return {
    id: data.id,
    title: data.title,
    content: data.content,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
};
