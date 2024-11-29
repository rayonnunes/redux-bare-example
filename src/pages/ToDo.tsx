import { useNavigate } from "react-router";
import ToDoList from "../components/ToDoList/ToDoList";

const ToDo = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px'}}>
      <button onClick={() => navigate("/")}>Go back</button>
      <ToDoList />
    </div>
  );
};

export default ToDo;
