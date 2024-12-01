import { useNavigate } from "react-router";
import GitHubRepo from "../components/GitHubRepo/GitHubRepo";

const GitHubRepoSaga = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      <button onClick={() => navigate("/")}>Go back</button>
      <GitHubRepo />
    </div>
  );
};

export default GitHubRepoSaga;
