import { useCallback, useEffect, useState } from 'react';

export const useAxios = (callback, axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(
    async (params) => {
      try {
        const { data } = await callback(params);
        setResponse(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [callback]
  );

  useEffect(() => {
    fetchData(axiosParams);
  }, [axiosParams, fetchData]); // execute once only

  return { response, error, loading };
};
