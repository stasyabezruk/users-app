import { useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import { getGithubUserRepositories } from '../../services/githubUsersApi';
import LoadingContent from '../LoadingContent';
import Pagination from '../Pagination';
import RepositoryListItem from '../RepositoryListItem';
import './styles.scss';

const RepositoryList = ({ reposNumber, userName }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { response, loading, error } = useAxios(getGithubUserRepositories, { userName, currentPage }, currentPage);

    return (
        <div>
            <h3 className="p-2 pt-0 pb-0">
                {reposNumber} {reposNumber === 1 ? 'repository' : 'repositories'}
            </h3>

            <div className="flexBox flexColumn">
                <LoadingContent response={response} loading={loading} error={error}>
                    <div className="flexBox flexColumn p-2 pt-0 list">
                        {response?.length > 0 &&
                            response.map((item) => (
                                <RepositoryListItem
                                    key={item.id}
                                    name={item.name}
                                    language={item.language}
                                    updated={item.updated_at}
                                />
                            ))}
                    </div>
                </LoadingContent>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={reposNumber}
                    pageSize={7}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
};

export default RepositoryList;
