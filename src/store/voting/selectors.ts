import { RootStore } from "../store";

export const selectCategories = (state: RootStore) =>
  state.votingStore.categories;
export const selectUsers = (state: RootStore) => state.votingStore.users;
export const selectCurrentUser = (state: RootStore) =>
  state.votingStore.currentUser;

// Selector placeholders - TO BE IMPLEMENTED
export const selectCategoryById = (state: RootStore, categoryId: string) => {
  // TODO: Implement selector to get category by ID
};

export const selectItemVotes = (
  state: RootStore,
  categoryId: string,
  itemId: string
) => {
  // TODO: Implement selector to get item votes
};

export const canUserVote = (
  state: RootStore,
  categoryId: string,
  itemId: string
) => {
  // TODO: Implement vote eligibility check
};
