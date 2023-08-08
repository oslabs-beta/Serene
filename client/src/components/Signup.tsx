import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import waves2 from '../assets/waves2.png';


type Props = {};

const Signup = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [arnInput, setArnInput] = useState('');
  const [response, setResponse] = useState('');
  const [region, setRegion] = useState('us-east-1')

  const navigate = useNavigate();


  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  const handleArnChange = (e: any) => {
    setArnInput(e.target.value);
  };
    const handleRegionChange = (e: any) => {
    setRegion(e.target.value);
  };
    const awsConsoleURL = `https://${region}.console.aws.amazon.com/cloudformation/home?region=${region}#/stacks/quickcreate?templateURL=https://komodobucket1.s3.amazonaws.com/komodoTestTemplate.json&stackName=komodoStack`

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      username,
      password,
      region,
      ARN: arnInput,
    };
    console.log(body);
    try {
      // console.log('SENDING USER OVER NOW')
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      // console.log('Error after fetch')
      // console.log('res: ',response)
      const data = await response.json();
      // console.log('data: ', data)
      console.log('fetch successful');
      setResponse(data);
      navigate('/home');
    } catch (error) {
      console.log('NOW Error: ', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-neutral-200">
      <img src={waves2} className="w-full fixed z-20 opacity-90" />
      <div className="flex flex-col justify-center border-black bg-neutral-100 bg-opacity-40 p-14 border-2 rounded-lg sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 h-3/5 min-w-1/4 max-w-1/2 z-30">
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
              className="bg-transparent border-2 border-black mt-2 p-1 rounded-md placeholder-black"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              className="bg-transparent border-2 border-black mt-2 mb-6 p-1 rounded-md placeholder-black"
              type="text"
              name="arn"
              placeholder="ARN"
              value={arnInput}
              onChange={handleArnChange}
            />
            {/* </label> */}
          </div>
          <select className="w-full p-1 text-black bg-white border-2 rounded-md shadow-sm outline-none appearance-none transition duration-300 ease-in-out hover:bg-black hover:border-2 border-white hover:text-white"
            onChange={handleRegionChange}
          >
              <option value="us-east-1" className='text-center'> ---- Select Region ---- </option>
              <option value="us-east-1" >US East 1 (N. Virginia)</option>
              <option value="us-east-2" >US East 2 (Ohio)</option>
              <option value="us-west-1">US West 1 (N. California) </option>
              <option value="us-west-2">US West 2 (Oregon)</option>
              <option value="ap-south-1">AP South 1 (Mumbai)</option>
              <option value="ap-northeast-1">AP Northeast 1 (Tokyo)</option>
              <option value="ap-northeast-2">AP Northeast 2 (Seoul)</option>
              <option value="ap-northeast-3">AP Northeast 3 (Osaka)</option>
              <option value="ap-southeast-1">AP Southeast 1 (Singapore)</option>
              <option value="ap-southeast-2">AP Southeast 2 (Sydney)</option>
              <option value="ca-central-1">CA Central 1 (Canada)</option>
              <option value="eu-central-1">Europe Central 1 (Frankfurt)</option>
              <option value="eu-west-1">Europe West 1 (Ireland)</option>
              <option value="eu-west-2">Europe West 2 (London)</option>
              <option value="eu-west-3">Europe West 3 (Paris)</option>
              <option value="eu-north-1">EU North 1 (Stockholm)</option>
              <option value="sa-east-1">SA East 1 (Sao Paulo)</option>
          </select>
          <button className="w-full px-4 py-1 bg-white rounded-lg transition duration-300 my-3 ease-in-out hover:scale-110 hover:bg-black hover:border-2 border-white hover:text-white"><a href={awsConsoleURL} target='_blank'>Connect Your AWS Account</a></button>
            
          <button
            type="submit"
            className="w-full px-4 py-1 bg-white rounded-lg transition duration-300 ease-in-out hover:scale-110 hover:bg-black hover:border-2 border-white hover:text-white"
          >
            Signup
          </button>
          {/* <p >Don't have an account? <a href="#signup">Sign up</a> here</p> */}
        </form>
        <p className="flex flex-col items-center justify-center mt-5 text-black">
          Already have an account?{' '}
          <span>
            <Link to="/" className="hover:underline hover:text-white">
              Login
            </Link>{' '}
            here
          </span>
        </p>
        {(() => {
          switch (response) {
            case 'username taken':
              return 'username is already taken';
            // case 'user created':
            //   return <Link to="/home"/>
            default:
              return <Link to="/home" />;
          }
        })()}
      </div>
    </div>
  );
};

export default Signup;
