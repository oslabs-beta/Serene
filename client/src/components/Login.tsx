import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import waves from '../assets/waves.png';
import { FunctionContext } from '../App';
import { UserContext } from '../App';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (response.status === 200) {
        setCurrentUser(username);
        navigate('/home');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.log('NOW Error: ', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-neutral-200">
      <img src={waves} className="w-full h-screen fixed z-20 bottom-0 left-0" />
      <div className="flex flex-col justify-center border-black p-14 border-2 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 h-3/5 min-w-1/4 max-w-1/2 z-30">
        <form
          className="w-full max-w-sm  flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col  border-black w-full">

            <input
              className="bg-transparent border-2 border-black p-1 rounded-md placeholder-black"

              type="text"
              value={username}
              name="username"
              placeholder="Username"
              onChange={handleUsernameChange}
            />
          
            <input
              className="bg-transparent border-2 border-black mt-2 mb-6 p-1 rounded-md placeholder-black"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            
          </div>
          <button
            type="submit"
            className="w-full px-4 py-1 bg-white rounded-lg transition duration-300 ease-in-out hover:scale-110 hover:bg-transparent hover:border-2 border-white hover:text-white"
          >
            LOGIN
          </button>
         
        </form>
        <p className="flex flex-col items-center justify-center mt-5 text-black">
          Don't have an account?{' '}
          <span>
            <Link
              to="/user/signup"
              className="hover:underline hover:text-white"
            >
              Sign up
            </Link>{' '}
            here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
