import client from "./client"

export const getGithubUserProfile = user => {
    return client.get(`/${user}`)
}