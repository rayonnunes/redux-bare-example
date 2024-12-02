import axios from "axios";

export const githubApi = {
  async searchRepositories(query: string) {
    const response = await axios.get(
      `https://api.github.com/search/repositories`,
      {
        params: {
          q: query,
          sort: "stars",
          order: "desc",
          per_page: 10,
        },
      }
    );
    return response.data;
  },

  async starRepository(repoFullName: string) {
    // Note: This would require authentication in a real app
    const response = await axios.put(
      `https://api.github.com/user/starred/${repoFullName}`,
      null,
      {
        headers: {
          Authorization: `Authorization ${import.meta.env.REACT_APP_GH_TOKEN}`,
        },
      }
    );
    return response.data;
  },
};
