import React, { useState} from 'react'
import Functions from './Functions'
import FunctionDetails from './FunctionDetails'
import { test } from '../shared'
import waves5 from '../assets/waves5.png';
import { Link, useNavigate } from 'react-router-dom'

type Props = {

}

const RightSideBar = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate()
  
  function signOutClick (e) {
    fetch('/api/user/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    navigate('/')
  } 


  return (
    <div>
  {showSidebar ? (
    <button
      className="flex text-4xl text-black items-center cursor-pointer fixed right-8 top-6 z-50 transition duration-400 ease-in-out hover:rotate-90"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      x
    </button>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor"   
    onClick={() => setShowSidebar(!showSidebar)}
    className="fixed  z-40 flex items-center cursor-pointer right-8 top-6"
    viewBox="-40 0 20 100"
    width="150"
    height="150"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
  )}


  <div //entire sidebar div
  className={`top-0 right-0 w-[25vw] bg-gray-300  p-10 pr-20 text-white fixed h-screen z-40  ease-in-out duration-300  ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}
>
<img
  src={waves5}
  className={`fixed h-screen -ml-[9vw] top-0  z-10 ${showSidebar ? 'block' : 'hidden'}`}
/>
  <div className='flex flex-col items-center justify-center'>
    <h3 className="mt-10 ml-20 text-2xl font-semibold text-white">{test}</h3>
    <div className='flex flex-col items-center my-4 ml-20 z-40'> 
      <button className='z-40 cursor-pointer border-2 bg-neutral-800 w-full p-2 mb-2 rounded-md border-black hover:bg-neutral-600 hover:text-white transition duration-100 ease-in-out'>Add Arn</button>
      <button className='z-40 cursor-pointer border-2 bg-neutral-800 w-full p-2 mb-2 rounded-md border-black hover:bg-neutral-600 hover:text-white transition duration-100 ease-in-out'>Edit Profile</button>
      <button className='z-40 cursor-pointer border-2 bg-neutral-800 w-full p-2 mb-2 rounded-md border-black hover:bg-neutral-600 hover:text-white transition duration-100 ease-in-out' onClick={signOutClick}>Sign Out</button>
    </div>
  </div>


    </div>
  </div>
  )
}

export default RightSideBar