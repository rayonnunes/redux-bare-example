import { Provider } from 'react-redux'
import ToDoList from './components/ToDoList'
import { store } from './store'

import './App.css'


function App() {

  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  )
}

export default App
