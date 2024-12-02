import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { thunk } from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

import { reducers as toDoReducers } from "./todo/reducers";
import { votingReducers } from "./voting/reducers";
import repositorySaga from "./repository/sagas";
import { repositoriesReducer } from "./repository/reducers";

export const rootReducer = combineReducers({
  repository: repositoriesReducer,
  toDoStore: toDoReducers,
  votingStore: votingReducers,
});

export type RootStore = ReturnType<typeof rootReducer>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(repositorySaga);
