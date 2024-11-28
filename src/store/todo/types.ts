export enum ToDoStatus {
  ACTIVE = "Active",
  COMPLETED = "Completed",
}

export type ToDo = {
  id: string;
  title: string;
  status: ToDoStatus;
};

export enum ToDoTypes {
  ADD_TODO = "ADD_TODO",
  EDIT_TODO = "EDIT_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export type TodoActionTypes = {
  type: ToDoTypes;
  id?: string;
  payload?: ToDo;
};

export enum FilterTypes {
  SHOW_ALL = "SHOW_ALL",
  SHOW_COMPLETED = "SHOW_COMPLETED",
  SHOW_ACTIVE = "SHOW_ACTIVE",
}

export type FilterTodoTypes = {
  type: FilterTypes;
};
