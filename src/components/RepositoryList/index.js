import { useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import { getGithubUserRepositories } from '../../services/githubUsersApi';
import LoadingContent from '../LoadingContent';
import Pagination from '../Pagination';
import RepositoryListItem from '../RepositoryListItem';

const RepositoryList = ({ reposNumber, userName }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { response, loading, error } = useAxios(getGithubUserRepositories, { userName, currentPage }, currentPage);

    return (
        <div>
            <h4>
                {reposNumber} {reposNumber === 1 ? 'repository' : 'repositories'}
            </h4>

            <div className="flexBox flexColumn">
                <LoadingContent response={response} loading={loading} error={error}>
                    <div className="flexBox flexColumn">
                        {response?.length > 0 &&
                            response.map((item) => <RepositoryListItem key={item.id} name={item.name} />)}
                    </div>
                </LoadingContent>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={reposNumber}
                    pageSize={20}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
};

export default RepositoryList;
