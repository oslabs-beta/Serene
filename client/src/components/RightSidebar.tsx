import React, { useState, useContext } from 'react';
import Functions from './Functions';
import FunctionDetails from './FunctionDetails';
import { test } from '../shared';
import waves5 from '../assets/waves5.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext, FunctionArnContext, RegionContext } from '@/App';
import Popup from 'reactjs-popup';

type Props = {};

const RightSideBar = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { funcArn, setFuncArn } = useContext(FunctionArnContext);
  const [usernameField, setUsernameField] = useState('');
  const [arnField, setArnField] = useState('');
  const [regionField, setRegionField] = useState('');
  const { region, setRegion } = useContext(RegionContext);

  // const handleUsernameChange = (e) => {
  //   setUsernameField(e.target.value);
  // };
  // const handleUsernameSubmit = (e) => {
  //   e.preventDefault();
  //   setCurrentUser(usernameField)
  //   console.log('New username:', usernameField);
  //   setUsernameField('');
  // };

  const handleRegionChange = (e) => {
    setRegionField(e.target.value);
  };

  // const handleRegionSubmit = (e) => {
  //   e.preventDefault();
  //   setRegion(regionField);
  //   console.log('New region:', regionField);
  //   setRegionField('');
  // };

  const handleArnChange = (e) => {
    setArnField(e.target.value);
  };

  // const handleArnSubmit = (e) => {
  //   e.preventDefault();
  //   setFuncArn(arnField);
  //   console.log('New ARN:', arnField);
  //   setArnField('');
  // };

  const handleSignOut = () => {
    fetch('/api/user/logout', {
      method: 'POST',
    })
      .then((response) => {
        console.log('Status code:', response.status);
      })
      .then((data) => {
        console.log('Response data:', data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleDelete = () => {
    fetch('/api/user/delete', {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('Status code:', response.status);
      })
      .then((data) => {
        console.log('Response data:', data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // useEffect(() => {
  //   FetchUser().then((returnedUserData) => {
  // setCurrentUser(returnedUserData);
  //     // console.log('data is reset: ', funcData);
  //   //data logic here
  // })}, [funcName]);

  const handleUpdate = async () => {
    try {
      const body = {};
      if (regionField !== ''){
        body.newRegion = regionField
      } else if (arnField !== ''){
        body.newARN= arnField
      }
      
      const res = await fetch('/api/user/edit', {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      console.log('fetch (patch) successful');
      const parsedRes = await res.json();
      console.log('updateUser response: ', parsedRes);
      setRegionField('')
      setArnField('')
    } catch (error) {
      console.log('ERROR sending update patch: ', error);
    }
  };

  return (
    <div>
      <div className="mr-40">
        CURRENT USERNAME IS <br />
        {currentUser}
      </div>
      {showSidebar ? (
        <button
          className="flex text-4xl text-black items-center cursor-pointer fixed right-8 top-6 z-50 transition duration-400 ease-in-out hover:rotate-90"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-40 flex items-center cursor-pointer right-8 top-6"
          viewBox="-40 0 20 100"
          width="150"
          height="150"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      )}

      <div //entire sidebar div
        className={`top-0 right-0 w-[25vw] bg-gray-300  p-10 pr-20 text-white fixed h-screen z-40  ease-in-out duration-300  ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <img
          src={waves5}
          className={`fixed h-screen -ml-[9vw] top-0  z-10 ${
            showSidebar ? 'block' : 'hidden'
          }`}
        />
        <div className="flex flex-col items-center justify-center">
          <h3 className="mt-10 ml-20 text-2xl font-semibold text-white">
            {test}
          </h3>
          <div className="flex flex-col items-center my-4 ml-20 z-40">
            {/* <!-- Modal toggle -->   */}
            <div className="">
              <Popup
                trigger={
                  <button className="z-40 cursor-pointer border-2 bg-neutral-800 w-full p-2 mb-2 rounded-md border-black hover:bg-neutral-600 hover:text-white transition duration-100 ease-in-out">
                    Update Arn
                  </button>
                }
                position="left center"
              >
                <div className=" h-1/3 border-2 border-white w-2/3 bg-white">
                  Update your ARN here
                  <br />
                  <form onSubmit={handleUpdate}>
                    <label htmlFor="arnInput" className="block mb-2">
                      ARN:
                    </label>
                    <input
                      type="text"
                      id="arnInput"
                      className="border border-gray-300 p-1 rounded-lg w-full"
                      placeholder="Enter ARN..."
                      onChange={handleArnChange}
                    />
                    <button
                      type="submit"
                      className="border-2 border-black mt-2"
                    >
                      Submit Arn
                    </button>
                  </form>
                </div>
              </Popup>
            </div>

            <div className="">
              <Popup
                trigger={
                  <button className="z-40 cursor-pointer border-2 bg-neutral-800 w-full p-2 mb-2 rounded-md  border-black hover:bg-neutral-600 hover:text-white transition duration-100 ease-in-out">
                    Update Region
                  </button>
                }
                position="left center"
              >
                <div className=" h-1/3 border-2 border-white w-2/3 bg-white">
                  Update your region here
                  <br />
                  <form onSubmit={handleUpdate}>
                    <label htmlFor="regionInput" className="block mb-2">
                      New region:
                    </label>

                    <select
                      className="w-full p-1 text-black bg-white border-2 border-black rounded-md shadow-sm outline-none appearance-none transition duration-300 ease-in-out hover:bg-black hover:border-2 hover:text-white"
                      onChange={handleRegionChange}
                    >
                      <option value="us-east-1" className="text-center">
                        {' '}
                        ---- Select Region ----{' '}
                      </option>
                      <option value="us-east-1">US East 1 (N. Virginia)</option>
                      <option value="us-east-2">US East 2 (Ohio)</option>
                      <option value="us-west-1">
                        US West 1 (N. California){' '}
                      </option>
                      <option value="us-west-2">US West 2 (Oregon)</option>
                      <option value="ap-south-1">AP South 1 (Mumbai)</option>
                      <option value="ap-northeast-1">
                        AP Northeast 1 (Tokyo)
                      </option>
                      <option value="ap-northeast-2">
                        AP Northeast 2 (Seoul)
                      </option>
                      <option value="ap-northeast-3">
                        AP Northeast 3 (Osaka)
                      </option>
                      <option value="ap-southeast-1">
                        AP Southeast 1 (Singapore)
                      </option>
                      <option value="ap-southeast-2">
                        AP Southeast 2 (Sydney)
                      </option>
                      <option value="ca-central-1">
                        CA Central 1 (Canada)
                      </option>
                      <option value="eu-central-1">
                        Europe Central 1 (Frankfurt)
                      </option>
                      <option value="eu-west-1">Europe West 1 (Ireland)</option>
                      <option value="eu-west-2">Europe West 2 (London)</option>
                      <option value="eu-west-3">Europe West 3 (Paris)</option>
                      <option value="eu-north-1">EU North 1 (Stockholm)</option>
                      <option value="sa-east-1">SA East 1 (Sao Paulo)</option>
                    </select>

                    <button
                      type="submit"
                      className="border-2 border-black mt-2"
                    >
                      Submit region
                    </button>
                  </form>
                </div>
              </Popup>
            </div>

            {/* <div className="">
              <Popup
                trigger={<button className='z-40 cursor-pointer border-2 bg-neutral-800 w-full p-2 mb-2 rounded-md  border-black hover:bg-neutral-600 hover:text-white transition duration-100 ease-in-out' >Update Profile</button>}
                position="left center"
              >
                <div className=" h-1/3 border-2 border-white w-2/3 bg-white">
                  Update your Username here
                  <br />
                  <form onSubmit={handleUsernameSubmit}>
                    <label htmlFor="userInput" className="block mb-2">
                      New Username:
                    </label>
                    <input
                      type="text"
                      id="userInput"
                      className="border border-gray-300 p-1 rounded-lg w-full"
                      placeholder="Enter new username"
                      value={usernameField}
                      onChange={handleUsernameChange}
                    />
                    <button
                      type="submit"
                      className="border-2 border-black mt-2"
                    >
                      Submit Username
                    </button>
                  </form>
                </div>
              </Popup>
            </div> */}

            <div className="">
              <Popup
                trigger={
                  <button className="z-40 cursor-pointer border-2 bg-neutral-800 w-full p-2 mb-2 rounded-md border-black hover:bg-neutral-600 hover:text-white transition duration-100 ease-in-out">
                    Delete Account
                  </button>
                }
                position="left center"
              >
                <div className=" h-1/3 border-2 border-white w-2/3 bg-white">
                  Are you sure you want to delete your account?
                  <br />
                  <button
                    onClick={handleDelete}
                    className="border-2 border-black mt-2 mr-2"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={close}
                    className="border-2 border-black mt-2"
                  >
                    Cancel
                  </button>
                </div>
              </Popup>
            </div>

            {/* <button className="z-40 cursor-pointer border-2 bg-neutral-800 w-full p-2 mb-2 rounded-md border-black hover:bg-neutral-600 hover:text-white transition duration-100 ease-in-out">
              Add Arn
            </button>
            <button className="z-40 cursor-pointer border-2 bg-neutral-800 w-full p-2 mb-2 rounded-md border-black hover:bg-neutral-600 hover:text-white transition duration-100 ease-in-out">
              Edit Profile
            </button> */}
            <button
              className="z-40 cursor-pointer border-2 bg-neutral-800 w-full p-2 mb-2 rounded-md border-black hover:bg-neutral-600 hover:text-white transition duration-100 ease-in-out"
              onClick={() => handleSignOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
