import React from 'react'
//14) import connect to connect to store. Go \/
import { connect } from 'react-redux'
//28b)import Loader. Go \/
import Loader from 'react-loader-spinner'
//29)import getFox. Go \/
import { getFox } from '../Actions'
//43)install and import styled-components
import styled from 'styled-components'
import '../App.css'


const FoxImage = styled.img`
border-radius: 5rem;
`

//11) create your component and pass in props. add your content and export. Go to App
const Fox = props => {
  console.log( 'Props: ', props)
  return(
    <div className = 'foxBox'>
      <h1>Fox Box</h1>
      {/*17)Give you component a button to do a thing. Add a conditional statement in case it doesn't do the thing. Go to foxActions */}
      {/*32) add a conditional to remove conditional statement ( !props.isFetching ). Go to foxActions */}
      <div className = 'foxBox'>
        { !props.image && !props.isFetching && <p>Foxes push the Button!</p> }
        {/*28)write a conditional for loading spinner. Import spinner as dependency. Go ^ */}
        { props.isFetching && ( <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        /> ) }
        {/*41)write conditional for displaying image. Go to App.css */}
        { props.image.image && <FoxImage src = { props.image.image } alt = 'Where did the fox go?' className = 'fox'/> }
        { props.image.image && <a target = '_blank' rel='noopener noreferrer' href = { props.image.link }>Get this Fox</a> }
      </div>
      {/*31)write your onClick. Go ^ */}
      <button className = 'foxButton' onClick = { props.getFox }>Get A Fox!</button>
    </div>
  )
}

//15)create your mapStateToProps. Refer to your reducer for your different states, pass them in and assign each to state.theStateName. Go \/
const mapStateToProps = state => {
  return {
    image: state.image,
    isFetching: state.isFetching,
    error: state.error
  }
}

//16)export connect, call mSTP and an empty object for first argument, with the component as second argument. Go ^
//30) add getFox to mSTP. Go ^
export default connect( mapStateToProps, { getFox } )( Fox )