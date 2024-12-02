import { RepositoryActionTypes } from "./types";

export const searchRepositories = (query: string) => ({
  type: RepositoryActionTypes.SEARCH_REPOSITORIES,
  payload: query,
});

export const starRepository = (repoFullName: string) => ({
  type: RepositoryActionTypes.STAR_REPOSITORY,
  payload: repoFullName,
});
