import client from './client';

export const getGithubUserProfile = ({ userName }) => {
    return client.get(`/${userName}`);
};

export const getGithubUserRepositories = ({ userName, currentPage = 1, showAmount = 7 }) => {
    return client.get(`/${userName}/repos?page=${currentPage}&per_page=${showAmount}`);
};
