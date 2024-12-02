import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchRepositories, starRepository } from "../../store/repository/actions";
import { RootStore } from "../../store";

const GitHubRepoSaga = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { repositories, loading, error } = useSelector(
    (state: RootStore) => state.repository
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    dispatch(searchRepositories(term));
  };

  const handleStarRepository = (repoFullName: string) => {
    dispatch(starRepository(repoFullName));
  };

  return (
    <div>
      <input 
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search GitHub repositories"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.full_name}
            <button onClick={() => handleStarRepository(repo.full_name)}>
              Star
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepoSaga;
