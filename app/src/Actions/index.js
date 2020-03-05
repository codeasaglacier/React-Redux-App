//25)explicit exports action, no need to import. export default must be imported first. Go to foxReducer
//37)add success and failure action types to export. Go to foxReducer
export { 
  FETCH_FOX_START, 
  FETCH_FOX_SUCCESS, 
  FETCH_FOR_FAILURE, 
  getFox 
} from './foxActions' 