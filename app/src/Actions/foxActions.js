//33b)import axois. Go \/
import axios from 'axios'

//24)export start action type. Go to Actions.index
export const FETCH_FOX_START = 'FETCH_FOX_START'
//35)export success action type. Go \/
export const FETCH_FOX_SUCCESS = 'FETCH_FOX_SUCCESS'
//36)export failure action type. Go to Actions.index
export const FETCH_FOR_FAILURE = 'FETCH_FOR_FAILURE'


//18)create async function for your action in which you return a function with dispatch as your argument
//23)convert to ES6. Arrow functions that immediately return something can be implicitly returned w/o {}
export const getFox = () => ( dispatch ) => {
    //19) dispatch an object with a type
    //Redux Thunk blocks functions from going to the reducer, dispatches the function as an object that goes back to Thunk, which then passes the object to the reducer
    //20)install redux-thunk as dependency. Go to base Index
    dispatch( { type: FETCH_FOX_START } )
    //33)install axios dependency. Go ^
    //34)write axios call, dispatch your success type and payload. Go ^
    axios
      .get( 'https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/' )
      .then( res => {
        dispatch( { type: FETCH_FOX_SUCCESS, payload: res.data.value } )
      } )
      //36) dispatch failure type and payload. Go ^
      .catch( err => {
        dispatch( { type: FETCH_FOR_FAILURE, payload: err.response } )
      })
  }


//leftovers from 23)\/\/\/
//const getFox = () => {
//  return ( dispatch ) => {
//    dispatch( { type: FETCH_FOX_START } )
//  }
//}