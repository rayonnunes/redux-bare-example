# Redux Todo List Challenge

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