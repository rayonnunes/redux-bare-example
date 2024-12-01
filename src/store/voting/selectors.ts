import { RootStore } from "../store";

export const selectCategories = (state: RootStore) =>
  state.votingStore.categories;
export const selectUsers = (state: RootStore) => state.votingStore.users;
export const selectCurrentUser = (state: RootStore) => {
  const { currentUser, users } = state.votingStore;

  if (Object.keys(users).includes(currentUser.id)) {
    const currentUserID = currentUser.id as keyof typeof users;
    return users[currentUserID];
  }
};

export const selectcanUserVote = (state: RootStore) => {
  const { currentUser, users } = state.votingStore;

  if (Object.keys(users).includes(currentUser.id)) {
    const currentUserID = currentUser.id as keyof typeof users;
    return users[currentUserID].availableVotes > 0;
  }

  return false;
};
