import { combineReducers } from "redux";
import {
  FilterTodoTypes,
  FilterTypes,
  ToDo,
  TodoActionTypes,
  ToDoStatus,
  ToDoTypes,
} from "./types";

const localReducer = localStorage.getItem("toDoReducer");

const initialState: ToDo[] = localReducer ? JSON.parse(localReducer) : [];

const toDoReducer = (state = initialState, action: TodoActionTypes) => {
  let newState;
  if (action.type === ToDoTypes.ADD_TODO) {
    newState = [...state, action.payload];
  } else if (action.type === ToDoTypes.TOGGLE_TODO) {
    newState = state.map((todo) => {
      if (todo.id === action.id) {
        todo.status =
          todo.status === ToDoStatus.ACTIVE
            ? ToDoStatus.COMPLETED
            : ToDoStatus.ACTIVE;
      }
      return todo;
    });
  } else if (action.type === ToDoTypes.EDIT_TODO) {
    newState = state.map((todo) => {
      if (todo.id === action.id) {
        todo.title = action.payload?.title ?? "";
      }
      return todo;
    });
  } else if (action.type === ToDoTypes.DELETE_TODO) {
    newState = state.filter((todo) => todo.id !== action.id);
  } else {
    newState = state;
  }

  localStorage.setItem("toDoReducer", JSON.stringify(newState));

  return newState;
};

const filterToDoReducer = (_: unknown, action: FilterTodoTypes) => {
  switch (action.type) {
    case FilterTypes.SHOW_ACTIVE:
      return ToDoStatus.ACTIVE;
    case FilterTypes.SHOW_COMPLETED:
      return ToDoStatus.COMPLETED;
    default:
      return null;
  }
};

export const reducers = combineReducers({
  toDo: toDoReducer,
  toDoFilter: filterToDoReducer,
});
