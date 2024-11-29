export enum VotingTypes {
  CAST_VOTE = "CAST_VOTE",
  REMOVE_VOTE = "REMOVE_VOTE",
  ADD_CATEGORY = "ADD_CATEGORY",
  ADD_ITEM_TO_CATEGORY = "ADD_ITEM_TO_CATEGORY",
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
}

export type VotingActionTypes = {
  type: VotingTypes;
  payload: any;
};

export type Category = {
  id: string;
  name: string;
  items: VotingItem[];
};

export type VotingItem = {
  id: string;
  name: string;
  votes: number;
};

export type User = {
  id: string;
  username: string;
  authLevel: number;
  availableVotes: number;
};
