import React, {useState} from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Signup = (props: Props) => {
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
    <div className="signupDiv">
      <form className="signupForm"
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
          SIGNUP
        </button>
      </form>
      <p >Already have an account? <Link to="/"><a>Login</a></Link> here</p>
    </div>
  )
}

export default Signup