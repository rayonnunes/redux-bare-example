import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToDo, setToDoFilter } from "../store/todo/actions";
import { RootStore } from "../store";
import { FilterTypes, ToDo } from "../store/todo/types";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  const [toDoInputValue, setToDoItem] = useState("");

  const toDoList = useSelector((state: RootStore) => state.toDoStore);

  const dispatch = useDispatch();

  const toDoTableItems = useMemo(() => {
    if (!toDoList.toDoFilter) return toDoList.toDo ?? [];
    return (
      toDoList.toDo.filter(
        (toDoItem) => toDoItem?.status === toDoList.toDoFilter
      ) ?? []
    );
  }, [toDoList.toDo, toDoList.toDoFilter]);

  console.log("toDoList", toDoList);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToDoItem(e.target.value);
  };

  const handleChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value in FilterTypes) {
      const filterType = e.target.value as FilterTypes;
      dispatch(setToDoFilter(filterType));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (toDoInputValue) {
      dispatch(addToDo(toDoInputValue));
      setToDoItem("");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <input
          type="text"
          placeholder="Add a new item"
          value={toDoInputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add ToDo Item</button>
      </form>

      <label htmlFor="filter">Filter by: </label>
      <select name="filter" id="filter" onChange={handleChangeFilter}>
        <option value={FilterTypes.SHOW_ALL}>All</option>
        <option value={FilterTypes.SHOW_ACTIVE}>Active</option>
        <option value={FilterTypes.SHOW_COMPLETED}>Completed</option>
      </select>

      {toDoTableItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Title</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
            {toDoTableItems.map((tableItem) => (
              <ToDoListItem key={tableItem?.id} tableItem={tableItem as ToDo} />
            ))}
          </tbody>
        </table>
      ) : (
        <span style={{ display: "block" }}>No tasks to show</span>
      )}
    </div>
  );
};

export default ToDoList;
