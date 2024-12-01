import { combineReducers } from "redux";
import { VotingActionTypes, VotingTypes } from "./types";

export const initialState = {
  categories: [
    {
      id: "1",
      name: "Movies",
      items: [
        { id: "m1", name: "Inception", votes: 10 },
        { id: "m2", name: "The Matrix", votes: 15 },
      ],
    },
    {
      id: "2",
      name: "Books",
      items: [
        { id: "b1", name: "1984", votes: 8 },
        { id: "b2", name: "Dune", votes: 12 },
      ],
    },
  ],
  users: {
    user1: {
      id: "user1",
      username: "admin",
      authLevel: 5,
      availableVotes: 20,
    },
    user2: {
      id: "user2",
      username: "poweruser",
      authLevel: 4,
      availableVotes: 15,
    },
    user3: {
      id: "user3",
      username: "newuser",
      authLevel: 1,
      availableVotes: 5,
    },
  },
  currentUser: {
    id: null,
    authLevel: 0,
  },
};

const categoriesReducer = (
  state = initialState.categories,
  action: VotingActionTypes
) => {
  if (action.type === VotingTypes.ADD_ITEM_TO_CATEGORY) {
    const newCategories = [...state];
    const categoryIndex = state.findIndex(
      (category) => category.id === action.payload?.categoryId
    );
    const newItems = [
      ...state[categoryIndex].items,
      {
        id: crypto.randomUUID(),
        name: action.payload?.itemName,
        votes: 0,
      },
    ];

    newCategories[categoryIndex].items = newItems;

    return newCategories;
  } else if (action.type === VotingTypes.ADD_CATEGORY) {
    return [
      ...state,
      {
        id: crypto.randomUUID(),
        name: action.payload.name,
        items: [],
      },
    ];
  } else if (action.type === VotingTypes.CAST_VOTE) {
    const newCategories = [...state];

    const selectedCategoryIndex = newCategories.findIndex(
      (category) => category.id === action.payload.categoryId
    );

    const selectedItemIndex = newCategories[
      selectedCategoryIndex
    ].items.findIndex((item) => item.id === action.payload.itemId);

    newCategories[selectedCategoryIndex].items[selectedItemIndex].votes++;
    return newCategories;
  } else {
    return state;
  }
};

const usersReducer = (
  state = initialState.users,
  action: VotingActionTypes
) => {
  if (action.type === VotingTypes.CAST_VOTE) {
    if (Object.keys(state).includes(action.payload.userId)) {
      const userId = action.payload.userId as keyof typeof state;
      if (state[userId].availableVotes < 1) {
        throw new Error("User does not have anymore votes");
      }
      state[userId].availableVotes--;
    }

    return state;
  } else {
    return state;
  }
};

// TODO: Implement current user reducer
const currentUserReducer = (
  state = initialState.currentUser,
  action: VotingActionTypes
) => {
  switch (action.type) {
    case VotingTypes.LOGIN_USER:
      return {
        ...action.payload,
      };
    case VotingTypes.LOGOUT_USER:
      return initialState.currentUser;
    default:
      return state;
  }
};

export const votingReducers = combineReducers({
  categories: categoriesReducer,
  users: usersReducer,
  currentUser: currentUserReducer,
});
