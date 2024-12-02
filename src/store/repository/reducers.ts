// src/store/repositories/reducer.ts
import { RepositoryActionTypes, RepositoryState } from "./types";

const initialState: RepositoryState = {
  repositories: [],
  loading: false,
  error: null,
};

export const repositoriesReducer = (
  state = initialState,
  action: any
): RepositoryState => {
  switch (action.type) {
    case RepositoryActionTypes.SEARCH_REPOSITORIES:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case RepositoryActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        loading: false,
      };

    case RepositoryActionTypes.SEARCH_REPOSITORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case RepositoryActionTypes.STAR_REPOSITORY:
      return {
        ...state,
        loading: true,
      };

    case RepositoryActionTypes.STAR_REPOSITORY_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case RepositoryActionTypes.STAR_REPOSITORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};
