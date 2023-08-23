import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import waves2 from '../assets/waves2.png';
import { RegionContext } from '@/App';

type Props = {};

const Signup = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [arnInput, setArnInput] = useState('');
  const [response, setResponse] = useState('');
  const { region, setRegion } = useContext(RegionContext);

  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleArnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArnInput(e.target.value);
  };
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };


  // const awsConsoleURL = `https://${region}.console.aws.amazon.com/cloudformation/home?region=${region}#/stacks/quickcreate?templateURL=https://serenetemplate.s3.amazonaws.com/SereneTemplate.json&stackName=SereneStack`;
  const awsConsoleURL = `https://${region}.console.aws.amazon.com/cloudformation/home?region=${region}#/stacks/quickcreate?templateURL=https://serene-admin-bucket.s3.amazonaws.com/SereneTemplate.json&stackName=SereneStack`
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      username,
      password,
      region,
      ARN: arnInput,
    };
    console.log(body);
    try {
      await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      console.log('fetch successful');

      navigate('/home');
    } catch (error) {
      console.log('NOW Error: ', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-300">
      <img src={waves2} className="w-full fixed z-20 opacity-90" />
      <div className="flex flex-col justify-center border-black bg-gray-200 rounded-md bg-opacity-40 p-14 border-2  sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 h-3/5 min-w-1/4 max-w-1/2 z-30">
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
          <select
            className="w-full p-1 text-black bg-white border-2 rounded-md shadow-sm outline-none appearance-none transition duration-300 ease-in-out hover:bg-black hover:border-2 border-white hover:text-white"
            onChange={handleRegionChange}
          >
            <option value="us-east-1" className="text-center">
              {' '}
              ---- Select Region ----{' '}
            </option>
            <option value="us-east-1">US East 1 (N. Virginia)</option>
            <option value="us-east-2">US East 2 (Ohio)</option>
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
          <button className="w-full px-4 py-1 bg-white rounded-lg transition duration-300 my-3 ease-in-out hover:scale-110 hover:bg-black hover:border-2 border-white hover:text-white">
            <a href={awsConsoleURL} target="_blank">
              Connect Your AWS Account
            </a>
          </button>

          <button
            type="submit"
            className="w-full px-4 py-1 bg-white rounded-lg transition duration-300 ease-in-out hover:scale-110 hover:bg-black hover:border-2 border-white hover:text-white"
          >
            Signup
          </button>

        </form>
        <p className="flex flex-col items-center justify-center mt-5 text-black">
          Already have an account?{' '}
          <span>
            <Link to="/login" className="hover:underline hover:text-white">
              Login
            </Link>{' '}
            here
          </span>
        </p>
        {(() => {
          switch (response) {
            case 'username taken':
              return 'username is already taken';
            default:
              return <Link to="/home" />;
          }
        })()}
      </div>
    </div>
  );
};

export default Signup;
