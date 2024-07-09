import { useEffect } from 'react';

import { useFetchMemosApi } from '~/features/memo/hooks/use-fetch-memos-api';

export const useFetchMemos = () => {
  const { memos, error, studyError, isLoading, query } = useFetchMemosApi();

  useEffect(() => {
    query();
  }, []);

  return { memos, fetchError: error, fetchStudyError: studyError, isLoading, refetch: query };
};
