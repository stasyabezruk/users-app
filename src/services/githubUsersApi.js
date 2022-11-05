import client from './client';

export const getGithubUserProfile = (user) => {
    return client.get(`/${user}`);
};

export const getGithubUserRepositories = (user, pageNumber, showAmount = 10) => {
    return client.get(`/${user}/repos?page=${pageNumber}&per_page=${showAmount}`);
};
