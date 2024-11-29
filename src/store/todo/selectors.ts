import { RootStore } from "../store";

export const toDoListFiltered = (state: RootStore) => {
  const { toDo, toDoFilter } = state.toDoStore;
  if (!toDoFilter) return toDo ?? [];
  return toDo?.filter((toDoItem) => toDoItem?.status === toDoFilter) ?? [];
};
