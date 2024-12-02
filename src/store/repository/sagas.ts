// src/store/repositories/sagas.ts
import { call, put, takeLatest, race, delay } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { RepositoryActionTypes } from "./types";
import { githubApi } from "../../services/githubApi";
import { Action } from "redux";

// Search Repositories Saga
function* searchRepositoriesSaga(action: { payload: string }): any {
  const query = action.payload;

  if (!query || query.trim().length < 2) {
    return;
  }

  try {
    const { result } = yield race({
      result: call(githubApi.searchRepositories, query),
      timeout: delay(5000),
    });

    if (result) {
      yield put({
        type: RepositoryActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: result.items,
      });
    } else {
      yield put({
        type: RepositoryActionTypes.SEARCH_REPOSITORIES_FAILURE,
        payload: "Search timed out",
      });
    }
  } catch (error: any) {
    yield put({
      type: RepositoryActionTypes.SEARCH_REPOSITORIES_FAILURE,
      payload: error.message,
    });
  }
}

// Star Repository Saga
function* starRepositorySaga(action: { payload: string }): SagaIterator {
  try {
    // Race condition and timeout handling
    const { result } = yield race({
      result: call(githubApi.starRepository, action.payload),
      timeout: delay(3000),
    });

    if (result) {
      yield put({
        type: RepositoryActionTypes.STAR_REPOSITORY_SUCCESS,
        payload: {
          repoFullName: action.payload,
          message: "Repository starred successfully!",
        },
      });
    } else {
      yield put({
        type: RepositoryActionTypes.STAR_REPOSITORY_FAILURE,
        payload: {
          repoFullName: action.payload,
          message: "Star action timed out",
        },
      });
    }
  } catch (error: any) {
    yield put({
      type: RepositoryActionTypes.STAR_REPOSITORY_FAILURE,
      payload: {
        repoFullName: action.payload,
        message: error.message,
      },
    });
  }
}

// Root Saga
export default function* repositoriesSaga(): SagaIterator {
  yield takeLatest(
    RepositoryActionTypes.SEARCH_REPOSITORIES,
    function* (action: Action & { payload: string }) {
      // Additional debounce
      yield delay(500);
      yield* searchRepositoriesSaga(action);
    }
  );
  yield takeLatest(RepositoryActionTypes.STAR_REPOSITORY, starRepositorySaga);
}
