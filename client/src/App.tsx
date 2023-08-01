import React from 'react' // div element does not exist on jsx.intrinsic element or something
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  

  return <div>
    <Routes>
      <Route path = "/" element = {<Login />}/>
      <Route path = "/signup" element = {<Signup /> }/> 
      {/* <Route path = "/"/> */}


  


    </Routes>


     
    
  </div>
}

export default App
