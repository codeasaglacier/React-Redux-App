//26)import start type action. Go \/
//38)import success and failure type actions. Go \/
import { 
  FETCH_FOX_START,
  FETCH_FOX_SUCCESS,
  FETCH_FOR_FAILURE
} from '../Actions'

//6)create you initial state with the properties you'll need. Go \/
const initialState = {
  image: {},
  isFetching: false,
  error: ''
}

//7)create reducer, pass in state with a default of initialState, and pass in action. give reducer a default. Go to Index(base file)
const foxReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    //27)write case for FETCH_FOX_START. Go to foxes.js
    case FETCH_FOX_START:
      return {
        ...state,
        isFetching: true
      }
    
    //39)write success case. Go \/  
    case FETCH_FOX_SUCCESS:
      return {
        ...state,
        image: action.payload,
        isFetching: false,
        error: ''
      }

    //40)write failure case. Go to foxes
    case FETCH_FOR_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default foxReducer