//6)create you initial state with the properties you'll need
const initialState = {
  image: null,
  isFetching: false,
  error: ''
}

//7)create reducer, pass in state with a default of initialState, and pass in action. give reducer a default. Go to Index(base file)
const foxReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    default:
      return state
  }
}

export default foxReducer