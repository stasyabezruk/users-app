import { useParams } from 'react-router-dom';
import LoadingContent from '../../components/LoadingContent';
import RepositoryList from '../../components/RepositoryList';
import Card from '../../components/UI/Card';
import UserInfo from '../../components/UserInfo';
import { useAxios } from '../../hooks/useAxios';
import { getGithubUserProfile } from '../../services/githubUsersApi';

function UserPage() {
    const { userName } = useParams();
    const { response, loading, error } = useAxios(getGithubUserProfile, userName);

    return (
        <div className="flexCenter">
            <Card>
                <LoadingContent response={response} loading={loading} error={error}>
                    <UserInfo name={response?.login} avatarURL={response?.avatar_url} />
                    <RepositoryList reposNumber={response?.public_repos} userName={response?.login} />
                </LoadingContent>
            </Card>
        </div>
    );
}

export default UserPage;
