import React from 'react';
import ReactDOM from 'react-dom';
//1)import createStore, applyMiddleware from redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './Reducers/rootReducer' 
import logger from 'redux-logger'
import './index.css';
import App from './App';


//2)add applyMiddleware as parameter to createStore after reducer and invoke
const store = createStore(
  rootReducer,
  applyMiddleware(
    //if you have to import multiple middlewares, add as parameters to applyMiddleware
    //if using a logger, the logger must bethe last parameter to applyMiddleware
    logger
  )
)

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
 document.getElementById('root'));



