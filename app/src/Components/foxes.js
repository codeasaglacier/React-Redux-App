import React from 'react'
//14) import connect to connect to store
import { connect } from 'react-redux'

//11) create your component and pass in props. add your content and export. Go to App
const Fox = props => {
  return(
    <div>
      <h1>Fox Box</h1>
      {/*17)Give you component a button to do a thing. Add a conditional statement in case it doesn't do the thing. Go to foxActions */}
      { !props.image && <p>Foxes try again!</p> }
      <button>Get A Fox!</button>
    </div>
  )
}

//15)create your mapStateToProps. Refer to your reducer for your different states, pass them in and assign each to state.theStateName
const mapStateToProps = state => {
  return {
    image: state.image,
    isFetching: state.isFetching,
    error: state.error
  }
}

//16)export connect, call mSTP and an empty object for first argument, with the component as second argument. Go ^
export default connect( mapStateToProps, {} )( Fox )