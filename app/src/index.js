import React from 'react';
import ReactDOM from 'react-dom';
//1)import createStore, applyMiddleware, compose from redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
//8)import your reducer
import foxReducer from './Reducers' 
import logger from 'redux-logger'
import './index.css';
import App from './App';

//2)create composeEnhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  foxReducer,
  //Middleware intercepts some process, runs a function at the intercept point, then (usually) continues the process. Or, sometimes middleware stops the process entirely.
  //3)add composeEnhancers as a parameter to createStore
  composeEnhancers( 
    //4)add applyMiddleware as parameter to composeEnhancers after reducer and invoke. Go to App.js
    applyMiddleware( 
      //if you have to import multiple middlewares, add as parameters to applyMiddleware
      //if using a logger, the logger must bethe last parameter to applyMiddleware
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



