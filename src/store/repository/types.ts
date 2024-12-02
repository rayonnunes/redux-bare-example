export enum RepositoryActionTypes {
  SEARCH_REPOSITORIES = "SEARCH_REPOSITORIES",
  SEARCH_REPOSITORIES_SUCCESS = "SEARCH_REPOSITORIES_SUCCESS",
  SEARCH_REPOSITORIES_FAILURE = "SEARCH_REPOSITORIES_FAILURE",
  STAR_REPOSITORY = "STAR_REPOSITORY",
  STAR_REPOSITORY_SUCCESS = "STAR_REPOSITORY_SUCCESS",
  STAR_REPOSITORY_FAILURE = "STAR_REPOSITORY_FAILURE",
  CANCEL_SEARCH = "CANCEL_SEARCH",
}

export interface Repository {
  id: number;
  full_name: string;
  stargazers_count: number;
}

export interface RepositoryState {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
}
