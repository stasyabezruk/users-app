import { useCallback, useEffect, useState } from 'react';

export const useAxios = (callback, axiosParams, initFetch) => {
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
    }, [initFetch]); // optional - to execute fetching manually

    return { response, error, loading };
};
