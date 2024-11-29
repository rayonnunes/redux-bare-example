import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

import { reducers as toDoReducers } from "./todo/reducers";
import { votingReducers } from "./voting/reducers";

export const rootReducer = combineReducers({
  toDoStore: toDoReducers,
  votingStore: votingReducers,
});

export type RootStore = ReturnType<typeof rootReducer>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
