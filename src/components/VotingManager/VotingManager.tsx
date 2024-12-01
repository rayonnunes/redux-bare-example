import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentUser,
  selectCategories,
} from "../../store/voting/selectors";
import { CategoryList, UserLogin, VotingItems } from "./components";
import { logoutUser } from "../../store/voting/actions";

// User Dashboard Component
const UserDashboard = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <div className="user-info">
        <p>Username: {currentUser?.username}</p>
        <p>Authentication Level: {currentUser?.authLevel}</p>
        <p>Available Votes: {currentUser?.availableVotes}</p>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

const VotingManager: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);

  return (
    <div className="voting-system-app">
      <h1>Collaborative Voting System</h1>

      {!currentUser?.id ? (
        <UserLogin />
      ) : (
        <>
          <UserDashboard />

          <div className="categories-container">
            {categories.map((category) => (
              <VotingItems key={category.id} category={category} />
            ))}
          </div>

          <CategoryList />
        </>
      )}
    </div>
  );
};

export default VotingManager;
