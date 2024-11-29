import { useNavigate } from "react-router";
import VotingManager from "../components/VotingManager/VotingManager";

const Voting = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      <button onClick={() => navigate("/")}>Go back</button>
      <VotingManager />
    </div>
  );
};

export default Voting;
