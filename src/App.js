import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {myContext} from './Context'
import Home from './Pages/Home'
import About from './Pages/About'
function App() {

  const [value, setValue] = useState("Hello from context")
  
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about/">About</Link></li>
          </ul>
        </nav>
        <myContext.Provider value={{value, setValue}}>
        <Route path="/" exact component={Home}/>
        <Route path="/about/" component={About} /> 
        </myContext.Provider>
      </>
    </Router>
  )
}

export default App
