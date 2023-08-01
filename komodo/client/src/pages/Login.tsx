import React, {useState, useEffect}  from 'react'
import { Link } from "react-router-dom"
import '../styles.scss'


type Props = {}

const Login = (props: Props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: any) => {    
    e.preventDefault()
  }




  return (
    <div className="loginDiv">
      <form className="loginForm"
        onSubmit={handleSubmit}
      >
        <div>
          <label>
            Username
            <input 
            type="text" 
            value={username}
            name="username" 
            placeholder="Enter username here" 
            onChange={handleUsernameChange}
            />
          </label>
          <label>
            Password
            <input 
            type="password" 
            name="password" 
            placeholder="Enter password here" 
            value = {password}
            onChange={handlePasswordChange}
            />
          </label>
        </div>  
        <button type="submit">
          LOGIN
        </button>
        {/* <p >Don't have an account? <a href="#signup">Sign up</a> here</p> */}
        <p >Don't have an account? <Link to="/signup"><a>Sign up</a></Link> here</p>
        
      </form>
    </div>
  )
}

export default Login