import { useNavigate, useParams } from 'react-router-dom';
import LoadingContent from '../../components/LoadingContent';
import RepositoryList from '../../components/RepositoryList';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import UserInfo from '../../components/UserInfo';
import { useAxios } from '../../hooks/useAxios';
import { getGithubUserProfile } from '../../services/githubUsersApi';

function UserPage() {
    const navigate = useNavigate();

    const { userName } = useParams();
    const { response, loading, error } = useAxios(getGithubUserProfile, { userName });

    return (
        <div className="flexCenter">
            <Card className="flexColumn">
                <div className="w-100">
                    <Button
                        label="Home page"
                        handleClick={() => {
                            navigate('/');
                        }}
                    />
                </div>
                <div className="w-100 flexBox">
                    <LoadingContent response={response} loading={loading} error={error}>
                        <UserInfo name={response?.login} avatarURL={response?.avatar_url} />
                        <RepositoryList reposNumber={response?.public_repos} userName={response?.login} />
                    </LoadingContent>
                </div>
            </Card>
        </div>
    );
}

export default UserPage;
