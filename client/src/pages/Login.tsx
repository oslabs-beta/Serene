import React, {useState, useEffect}  from 'react'
import { Link } from "react-router-dom"



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
      {/* <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>  */}
      <form className="loginForm"
        onSubmit={handleSubmit}
      >
        <div>
        <div className="bg-blue-500 text-white p-4">This is a styled box using Tailwind CSS!</div>

          <label className="bg-red-500 text-red">
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
        {/* <p >Don't have an account? <Link to="/signup"><a>Sign up</a></Link> here</p> */}
        
      </form>
    </div>
  )
}

export default Login