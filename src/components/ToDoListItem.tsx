import { useDispatch } from "react-redux";

import { deleteToDo, toggleToDo, editToDo } from "../store/todo/actions";
import { ToDo, ToDoStatus } from "../store/todo/types";
import { ChangeEvent, useState } from "react";

export type ToDoListItemProps = {
  tableItem: ToDo;
};
const ToDoListItem = (props: ToDoListItemProps) => {
  const { tableItem } = props;

  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(tableItem?.title);

  const dispatch = useDispatch();

  const handleEditTitle = () => setEditMode(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleEditItem = () => {
    if (newTitle) {
      dispatch(editToDo(tableItem.id, newTitle));
    }
    setEditMode(false);
  };

  const handleToggleStatus = () => {
    dispatch(toggleToDo(tableItem.id));
  };

  const handleDeleteToDoItem = () => {
    dispatch(deleteToDo(tableItem.id));
  };

  return (
    <tr key={tableItem?.id}>
      <td>
        <input
          type="checkbox"
          id={`${tableItem?.id}-checkbox`}
          name={`${tableItem?.id}`}
          checked={tableItem?.status === ToDoStatus.COMPLETED}
          onChange={handleToggleStatus}
        />
      </td>
      <td>
        {editMode ? (
          <input
            type="text"
            value={newTitle}
            onChange={handleInputChange}
            onBlur={handleEditItem}
          />
        ) : (
          <button title="click to edit" onClick={handleEditTitle}>
            {tableItem?.title}
          </button>
        )}
      </td>
      <td>
        <button
          type="button"
          style={{ fontSize: "10px" }}
          onClick={handleDeleteToDoItem}
        >
          🗑️
        </button>
      </td>
    </tr>
  );
};

export default ToDoListItem;
