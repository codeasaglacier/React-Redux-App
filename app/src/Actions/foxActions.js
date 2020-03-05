//18)create async function for your action in which you return a function with dispatch as your argument
const getFox = () => {
  return ( dispatch ) => {
    //19) dispatch an object with a type
    //Redux Thunk blocks functions from going to the reducer, dispatches the function as an object that goes back to Thunk, which then passes the object to the reducer
    //20)install redux-thunk as dependency. Go to base Index
    dispatch( { type: FETCH_FOX_START } )
  }
}