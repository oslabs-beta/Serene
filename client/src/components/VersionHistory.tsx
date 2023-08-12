import React, {useContext, useState, useEffect} from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'
import { useLocation } from "react-router-dom"
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

import {
  PushSpinner, TraceSpinner, RainbowSpinner,
  RingSpinner, SwishSpinner, PongSpinner,
  MetroSpinner, JellyfishSpinner
}
  from "react-spinners-kit"

type Props = {
  // name: string;
  // funcName: string;
  // setFuncName: Function;
}

const VersionHistory = () => {
  const [isLoading, setIsLoading] = useState(true);

  // const [popoverViewing, setPopoverViewing] = useState(Array(mockVersionData))

  useEffect(() => {
    setTimeout( () => {
      setIsLoading(false);
    }, 2000);
  }, []);


  const mockCode1 = () => { 
      const arr = ['info1','info2','info3','info4', 'info5']
      Math.floor(arr.length/2)
      const response = {
        statusCode: 200,
        body: JSON.stringify('error fixed')
      };
      return response;
  }
  const mockCode2 = () => { 
    const arr = ['info1','info2','info3']
    const response = {
      statusCode: 200,
      body: JSON.stringify('testing response')
    };
    return response;
}
const mockCode3 = () => { 
  const arr = ['info1', 'info5']
  Math.floor(arr.length/2)
  const response = {
    statusCode: 200,
    body: JSON.stringify('version3')
  };
  return response;
}
const mockCode4 = () => { 
  const arr = ['info1','info2','info3', 'info5']
  const response = {
    statusCode: 200,
    body: JSON.stringify('testing errors')
  };
  return response;
}
const mockCode5 = () => { 
  const arr = ['info1','info2','info3','info4', 'info5']
  Math.floor(arr.length/2)
  const response = {
    statusCode: 200,
    body: JSON.stringify('error fixed')
  };
  return response;
}
    const mockVersionData = [
      { version:1 ,alias: 'test1', arn: 'xxx:hellouniverse:test', code: mockCode1},
      { version:2, alias: 'test2', arn: 'xxx:hellouniverse:test', code: mockCode2},
      { version:3, alias: 'test3', arn: 'xxx:hellouniverse:test', code: mockCode3},
      { version:4, alias: 'test4', arn: 'xxx:hellouniverse:test', code: mockCode4},
      { version:5, alias: 'test5', arn: 'xxx:hellouniverse:test', code: mockCode5},
    ]
    console.log('is this code? ', mockVersionData[0].code)
    // const location = useLocation()
    // const data = location.state.name
    // console.log('this is data in versions ', data)


  // const context = useContext(FuncNameContext)
// console.log(name, funcName)

  return (
    <div>
                {/* TOP SECTION OF EVERY PAGE */}
        <div className="flex justify-between items-center bg-gray-300 h-24">
        {/* <LeftSideBar funcName={funcName} setFuncName={setFuncName} />     */}
        <LeftSideBar /> 
        <h1 className='font-extrabold text-4xl font-mono'> KOMODO </h1>
        <RightSideBar />  
        </div> 
        <div className="flex justify-center">
        
      {/* <div>
      <JellyfishSpinner />

      </div> */}




        {/* {isLoading ? (
         <div
  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span >
</div> 

        ) : ( 
          
        )}
         */}
        
        
        
        <a
            href="/home"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
         
              Home
            </span>
          </a>
          <a
            href="/metrics"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
         
              Metrics
            </span>
          </a>
          <a
            href="/warming"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
        
              Warm Functions
            </span>
          </a>

          <a
            href="/logs"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              View Logs
            </span>
          </a>
        </div>
        
 {/*BODY DIV */}
 
<div className="flex justify-center h-screen w-full ">
   
  <div className="flex flex-col justify-between items-end my-3 border-4 bg-gray-200 rounded-md h-2/3 w-3/4 ">
    {mockVersionData.reverse().map((item) => (
      <div className="group flex w-1/2"> {/* Remove justify-between class */}
        {/* <div></div> HERE for SPACING ONLY */}
        <Popover placement="left" >
          <PopoverHandler className='w-20 p-1 mt-2 mb-1 transition duration-100 ease-in-out group-hover:scale-150 ml-0'>
            <Button>version {item.version}</Button>
          </PopoverHandler>
          <PopoverContent className='border-black border-2 w-1/3'>
            <span>more version {item.code.toString()} details here</span>
          </PopoverContent>
        </Popover>


      <div className="relative w-10 h-20 transition-all duration-200 ease-in-out transform-growth group-hover:w-7/12 ml-10">
      <svg className="w-full h-full overflow-visible">
        <defs>
          <marker id="m" markerWidth="4" markerHeight="8" refX="0" refY="1" viewBox="0 0 1 2">
            <polygon points="0,0 1,1 0,2" fill="black"/>
          </marker>
        </defs>
        <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="2" markerEnd="url(#m)" stroke="black"/>
      </svg>
    </div>

    
        <span className="group-hover:bg-black group-hover:text-white bg-white rounded-md p-2 transition duration-100 ease-in-out group-hover:scale-110 text-center flex items-center ml-auto"> {/* Add ml-auto class to align the span to the right */}
          alias {item.alias}
        </span>
        
      </div>
    ))}








  </div>









  
</div>






    </div>
  )
}

export default VersionHistory