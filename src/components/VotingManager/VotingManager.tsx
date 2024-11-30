import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCategory, loginUser, addCategory } from "../../store/voting/actions";
import {
  selectUsers,
  selectCurrentUser,
  selectCategories,
} from "../../store/voting/selectors";
import { Category, User } from "../../store/voting/types";

const UserLogin: React.FC = () => {
  const [username, setUsername] = useState("");

  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const matchedUsername = (Object.values(users) as User[]).find(
      (user) => user.username === username
    );

    if (matchedUsername) {
      dispatch(loginUser(matchedUsername));
    }
  };

  return (
    <div className="user-login">
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Category List Component
const CategoryList: React.FC = () => {
  const [newCategory, setNewCategory] = useState("");

  const categories = useSelector(selectCategories);
  const dispatch = useDispatch()

  const handleAddCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newCategory.trim()) {
      dispatch(addCategory(newCategory))
      setNewCategory("");
    }
  };

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <div className="add-category">
        <form onSubmit={handleAddCategory}>
          <input
            type="text"
            placeholder="New Category Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button type="submit">Add Category</button>
        </form>
      </div>
      {categories.map((category) => (
        <div>{category.name}</div>
      ))}
    </div>
  );
};

// Voting Items Component
const VotingItems: React.FC<{ category: Category }> = ({ category }) => {
  const [newItem, setNewItem] = useState("");

  const dispatch = useDispatch();

  const handleAddItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newItem.trim()) {
      dispatch(addItemToCategory(category.id, newItem));
      setNewItem("")
    }
  };

  const handleVote = (itemId: string) => {
    // TODO: Dispatch vote action
    console.log(`Voting for item ${itemId} in category ${category.id}`);
  };

  return (
    <div className="voting-items">
      <h3>{category.name}</h3>
      <div className="add-item">
        <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="New Item Name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          />
        <button type="submit">Add Item</button>
          </form>
      </div>
      <div className="items-list">
        {category.items.map((item) => (
          <div key={item.id} style={{display: 'flex', flexDirection: 'column'}}>
            <span>{item.name}</span>
            <span>Votes: {item.votes}</span>
            <button onClick={() => handleVote(item.id)}>Vote</button>
          </div>
        ))}
      </div>
      <span>---------------------------------------------</span>
    </div>
  );
};

// User Dashboard Component
const UserDashboard = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <div className="user-info">
        <p>Username: {currentUser.username}</p>
        <p>Authentication Level: {currentUser.authLevel}</p>
        <p>Available Votes: {currentUser.availableVotes}</p>
      </div>
    </div>
  );
};

// Main App Component
const VotingManager: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);

  return (
    <div className="voting-system-app">
      <h1>Collaborative Voting System</h1>

      {!currentUser.id ? (
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
