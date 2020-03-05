import React from 'react'
import './App.css'
//12) import your component. Go \/
import Fox from './Components/foxes'

//5)Clean up unwanted boilerplate code. Go to reducers

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*13)add component to App. Go back to foxes */}
        <Fox />
      </header>
    </div>
  );
}

export default App;
