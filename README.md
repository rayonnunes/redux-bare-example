# 1 - Redux Todo List Challenge (easy)

## Objective
Create a todo list application using pure Redux that allows users to:
1. Add new todos
2. Toggle todo completion status
3. Delete todos
4. Filter todos by status (All, Active, Completed)

## Project Structure
You'll need to implement the following files:
- `actions.js`: Define action creators
- `reducers.js`: Create reducers for managing state
- `store.js`: Configure the Redux store
- `App.js`: React component to render the todo list
- `index.js`: Main application entry point

## Requirements

### 1. Action Types
Define these action types in `actions.js`:
- `ADD_TODO`
- `TOGGLE_TODO`
- `DELETE_TODO`
- `SET_VISIBILITY_FILTER`

### 2. Action Creators
Create action creators for each action type:
```javascript
// Example structure
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text
});
```

### 3. Reducers
Implement two reducers:
- `todos` reducer: Manages the list of todos
- `visibilityFilter` reducer: Manages the current filter state

### 4. Store Configuration
Set up a Redux store using `createStore` from Redux

### 5. Component Requirements
Your `App.js` should include:
- Input field to add new todos
- List of todos with:
  - Checkbox to toggle completion
  - Delete button for each todo
- Filter buttons (All, Active, Completed)

### 6. Filtering Logic
Implement a selector function to filter todos based on the current visibility filter

## Bonus Challenges
- Add local storage persistence
- Implement todo editing functionality
- Add animation to todo list items

## Hints
- Use `combineReducers` to combine multiple reducers
- Remember to create unique IDs for todos (you can use `Date.now()` or a library like `uuid`)
- Keep state immutable in your reducers

## Estimated Time
- Basic Implementation: 30-45 minutes
- Bonus Challenges: Additional 15-30 minutes

## Evaluation Criteria
- Correct Redux flow (actions → reducers → store)
- Immutable state management
- Clean and readable code
- Functional filtering mechanism

# 2 - Real-time Collaborative Voting System Challenge (medium)

## Objective
Create a Redux-based voting application that manages a real-time collaborative voting scenario with complex state requirements:

### Core Requirements
1. Multiple voting categories (e.g., Movies, Books, Games)
2. User vote tracking and prevention of multiple votes
3. Dynamic vote calculation and ranking
4. Vote weight system based on user authentication level

## State Structure Challenge
Your Redux store should manage:
```javascript
{
  categories: [
    {
      id: string,
      name: string,
      items: [
        {
          id: string,
          name: string,
          votes: number,
          userVotes: {
            [userId: string]: {
              weight: number,
              timestamp: number
            }
          }
        }
      ]
    }
  ],
  users: {
    [userId: string]: {
      id: string,
      username: string,
      authLevel: number,
      availableVotes: number
    }
  },
  currentUser: {
    id: string | null,
    authLevel: number
  }
}
```

## Action Types to Implement
- `CAST_VOTE`
- `REMOVE_VOTE`
- `ADD_CATEGORY`
- `ADD_ITEM_TO_CATEGORY`
- `LOGIN_USER`
- `LOGOUT_USER`

## Complex Voting Rules
- Users can vote only once per item
- Votes have different weights based on user's authentication level
- Users have a limited number of total votes across all categories
- Implement a cooldown/timeout mechanism for vote changes

## Reducer Challenges
1. Implement immutable state updates
2. Handle vote weight calculations
3. Prevent duplicate votes
4. Manage user vote limits

## Selector Challenges
- Create selectors to:
  - Calculate total votes for each category
  - Rank items within categories
  - Check if a user can vote
  - Calculate remaining votes for a user

## Bonus Complexity
- Implement vote expiration (votes decay over time)
- Add vote history tracking
- Create a voting audit trail

## Evaluation Criteria
- Correct Redux state management
- Immutable state updates
- Complex logic implementation
- Handling of edge cases
- Code readability and structure

## Estimated Time
- Core Implementation: 40-45 minutes
- Bonus Features: Additional 15-20 minutes

## Recommended Approach
1. Design the initial state structure
2. Create action creators
3. Implement reducers with complex logic
4. Create selectors for data derivation
5. Build a simple UI to interact with the voting system

This challenge is designed to test your Redux skills by presenting a more complex state management scenario. The most challenging points of this exercise are:

1. **Complex State Management**: 
   - The state structure requires handling nested objects
   - Multiple interconnected entities (categories, items, users)
   - Dynamic vote calculations

2. **Advanced Redux Concepts**:
   - Immutable state updates
   - Sophisticated reducer logic
   - Creating selectors for derived data
   - Managing user-specific voting rules

3. **Real-world Scenario Simulation**:
   - Mimics a collaborative voting platform
   - Implements authentication-based voting weights
   - Prevents voting abuse through multiple mechanisms

Key Challenges:
- Preventing duplicate votes
- Calculating vote weights
- Managing user vote limits
- Implementing complex state updates
- Creating efficient selector functions

The exercise requires you to think beyond simple CRUD operations and implement a more nuanced state management system.

The goal is to test your ability to:
- Design complex Redux state
- Implement intricate reducer logic
- Create efficient selectors
- Handle multiple interconnected state updates

# 3 - GitHub Repository Search and Star Management (hard)

Imagine you're building a sophisticated GitHub repository exploration application that requires robust handling of asynchronous operations. Your goal is to create a system that can efficiently search repositories and manage starring actions while gracefully handling the unpredictable nature of network requests.

Challenge Core Objectives:
The challenge is designed to test your ability to manage complex side effects and race conditions using Redux-Saga. You'll be implementing two key asynchronous workflows:

1. Repository Search Flow
The search functionality needs to solve several real-world complexity challenges:

- Handle multiple rapid search requests
- Prevent stale or outdated search results from overwriting newer results
- Implement a timeout mechanism to handle slow network responses
- Allow manual cancellation of ongoing searches
- Provide clear, predictable state updates


2. Repository Star Management
The star feature requires sophisticated async handling:

- Execute repository starring with a reasonable timeout
- Manage potential network failures
- Provide immediate and accurate feedback to the user
- Ensure robust error handling



Technical Complexity Highlights:

- You'll work with generator functions
- Leverage advanced Redux-Saga effects like race(), fork(), and cancel()
- Implement intricate flow control for asynchronous operations
- Handle multiple concurrent action scenarios

Simulated API Behavior:
The provided githubApi simulates real-world network conditions:

- Random network delays (0-2 seconds for search, 0-3 seconds for starring)
- Occasional random failures to test error handling
- Predictable but not deterministic response patterns

Key Saga Techniques You'll Practice:

- Using race() to manage competing async flows
- Implementing cancellation logic
- Creating robust error handling strategies
- Managing side effects with fine-grained control

Learning Goals:

- Understand how to prevent race conditions in async workflows
- Learn advanced generator function techniques
- Develop skills in managing complex state transitions
- Practice writing resilient, production-like async code

Mental Model Challenge:
Think of this like choreographing a complex dance where multiple dancers (async operations) need to move precisely, potentially changing direction or stopping mid-performance based on external signals.
Recommended Approach:

1. Understand the existing code structure
2. Implement the TODO sections incrementally
3. Test edge cases like:

- Multiple quick successive searches
- Starring a repository during an ongoing search
- Handling network timeouts
- Managing unexpected errors