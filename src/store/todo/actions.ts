import {
  FilterTodoTypes,
  FilterTypes,
  TodoActionTypes,
  ToDoStatus,
  ToDoTypes,
} from "./types";

export const addToDo = (title: string): TodoActionTypes => {
  console.log("title", title);

  return {
    type: ToDoTypes.ADD_TODO,
    payload: {
      id: crypto.randomUUID(),
      title: title,
      status: ToDoStatus.ACTIVE,
    },
  };
};

export const toggleToDo = (id: string): TodoActionTypes => {
  return {
    type: ToDoTypes.TOGGLE_TODO,
    id,
  };
};

export const editToDo = (
  id: string,
  title: string
): Omit<TodoActionTypes, "payload"> & {
  payload: Partial<TodoActionTypes["payload"]>;
} => {
  return {
    type: ToDoTypes.EDIT_TODO,
    id,
    payload: {
      title,
    },
  };
};

export const deleteToDo = (id: string): TodoActionTypes => {
  return {
    type: ToDoTypes.DELETE_TODO,
    id,
  };
};

export const setToDoFilter = (status: FilterTypes): FilterTodoTypes => {
  return {
    type: status,
  };
};
