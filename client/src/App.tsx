import React from 'react' // div element does not exist on jsx.intrinsic element or something
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  

  return <div className="bg-red-20">
    <Routes>

      <Route path = "/" element = {<Login />}/>
      <Route path = "/signup" element = {<Signup /> }/> 
      <Route path = "/home" element ={<Home />}/>


  


    </Routes>


     
    
  </div>
}

export default App
