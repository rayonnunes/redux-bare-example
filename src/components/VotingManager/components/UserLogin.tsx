import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../../../store/voting/actions";
import { selectUsers } from "../../../store/voting/selectors";
import { User } from "../../../store/voting/types";

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

export default UserLogin;
