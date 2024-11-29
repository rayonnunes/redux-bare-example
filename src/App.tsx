import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router";

import { store } from './store'

import './App.css'
import Router from './routes/Routes';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
