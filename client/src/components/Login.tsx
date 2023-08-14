import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import waves from '../assets/waves.png';
import { FunctionContext } from '../App';

type Props = {};

const Login = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
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

      // const data = await response.json();
      // console.log('data: ', data);
      console.log('fetch successful');
      //probably need an error case to catch
      navigate('/home');
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
            {/* <label className="border-grey-500 border-4 my-2" > */}
            {/* Username */}
            <input
              className="bg-transparent border-2 border-black p-1 rounded-md placeholder-black"
              // className = 'border-white p-1 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
              type="text"
              value={username}
              name="username"
              placeholder="Username"
              onChange={handleUsernameChange}
            />
            {/* </label> */}
            {/* <label className="border-grey-500 border-4 my-2">
              Password */}
            <input
              className="bg-transparent border-2 border-black mt-2 mb-6 p-1 rounded-md placeholder-black"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {/* </label> */}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-1 bg-white rounded-lg transition duration-300 ease-in-out hover:scale-110 hover:bg-transparent hover:border-2 border-white hover:text-white"
          >
            LOGIN
          </button>
          {/* <p >Don't have an account? <a href="#signup">Sign up</a> here</p> */}
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
