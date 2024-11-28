import { combineReducers, createStore } from "redux";
import { reducers as toDoReducers } from "./todo/reducers";

export const rootReducer = combineReducers({
  toDoStore: toDoReducers,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
