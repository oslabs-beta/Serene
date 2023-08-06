import React from 'react' // div element does not exist on jsx.intrinsic element or something
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import VersionHistory from './components/VersionHistory'
import Metric from './components/Metric'
import Warming from './components/Warming'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  

  return <div className="bg-red-20">
    <Routes>

      <Route path = "/" element = {<Login />}/>
      <Route path = "/user/signup" element = {<Signup /> }/> 
      <Route path = "/home" element ={<Home />}/>
      <Route path = "/versions" element ={<VersionHistory/>}/>
      <Route path = "/metrics" element ={<Metric />}/>
      <Route path = "/warming" element ={<Warming />}/>
      


    </Routes>     
    
  </div>
}

export default App
