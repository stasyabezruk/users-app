import ErrorContent from '../ErrorContent';

const LoadingContent = ({ response, loading, error, children }) => {
    if (!response && !loading) {
        return <ErrorContent error={error?.response?.data?.message} />;
    }

    if (!response && loading) return <span role="loading">Loading...</span>;

    return <>{children}</>;
};

export default LoadingContent;
