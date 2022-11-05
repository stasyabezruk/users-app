import { useAxios } from '../../hooks/useAxios';
import { getGithubUserRepositories } from '../../services/githubUsersApi';

const RepositoryList = ({ reposNumber, userName }) => {
    const { response, loading, error } = useAxios(getGithubUserRepositories, userName);
    return (
        <div>
            <h4>
                {reposNumber} {reposNumber === 1 ? 'repository' : 'repositories'}
            </h4>
        </div>
    );
};

export default RepositoryList;
