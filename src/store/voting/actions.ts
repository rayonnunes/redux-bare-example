import { User, VotingTypes } from "./types";
export const castVote = (
  categoryId: string,
  itemId: string,
  userId: string
) => ({
  type: VotingTypes.CAST_VOTE,
  payload: { categoryId, itemId, userId },
});

export const removeVote = (
  categoryId: string,
  itemId: string,
  userId: string
) => ({
  type: VotingTypes.REMOVE_VOTE,
  payload: { categoryId, itemId, userId },
});

export const addCategory = (name: string) => ({
  type: VotingTypes.ADD_CATEGORY,
  payload: { name },
});

export const addItemToCategory = (categoryId: string, itemName: string) => ({
  type: VotingTypes.ADD_ITEM_TO_CATEGORY,
  payload: { categoryId, itemName },
});

export const loginUser = (user: User) => ({
  type: VotingTypes.LOGIN_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: VotingTypes.LOGOUT_USER,
});
