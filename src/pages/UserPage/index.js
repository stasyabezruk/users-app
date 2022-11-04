import { useParams } from "react-router-dom";
import ErrorContent from "../../components/ErrorContent";
import RepositoryList from "../../components/RepositoryList";
import Card from "../../components/UI/Card";
import UserInfo from "../../components/UserInfo";
import { useAxios } from "../../hooks/useAxios";
import { getGithubUserProfile } from "../../services/githubUsersApi";


const UserPage = () => {
    const { userName } = useParams();
    const { response, loading, error } = useAxios(getGithubUserProfile, userName);

    if (!response && !loading) {
        return <ErrorContent error={error?.response?.data?.message} />
    }

    if (!response && loading) return <span>Loading...</span>

    return (
        <div className="flexCenter">
            <Card>
                <UserInfo
                    name={response.login}
                    avatarURL={response.avatar_url}
                />
                <RepositoryList reposNumber={response.public_repos} />
            </Card>

        </div>
    );
}

export default UserPage;