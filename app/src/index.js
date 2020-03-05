import React from 'react';
import ReactDOM from 'react-dom';
//1)import createStore, applyMiddleware, compose from redux. Go \/
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
//8)import your reducer. Go \/
import foxReducer from './Reducers' 
import logger from 'redux-logger'
import './index.css';
import App from './App';
//21) import Thunk. Go \/
import thunk from 'redux-thunk'

//2)create composeEnhancers. Go \/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  foxReducer,
  //Middleware intercepts some process, runs a function at the intercept point, then (usually) continues the process. Or, sometimes middleware stops the process entirely.
  //3)add composeEnhancers as a parameter to createStore. Go \/
  composeEnhancers( 
    //4)add applyMiddleware as parameter to composeEnhancers after reducer and invoke. Go to App.js
    applyMiddleware( 
      //if you have to import multiple middlewares, add as parameters to applyMiddleware
      //if using a logger, the logger must bethe last parameter to applyMiddleware
      //22)pass thunk to applyMiddleware. Go back to foxActions
      thunk,
      logger 
    ) 
  )
)
//9)wrap Provider around app and pass in store. Go to Reducer index
ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
 document.getElementById('root'));



