import React, { useEffect, useState, createContext, useContext } from 'react';
import Metric from './Metric';
import VersionHistory from './VersionHistory';
import Warming from './Warming';
import Logs from './Logs';
import { Link, useNavigate } from 'react-router-dom';
import { FunctionContext } from '../App';

type Props = {
  detailID?: number;
  name: string;
  description?: string;
  versHist?: string;
  metric?: string;
  warmData?: string;
  arn?: string; //<<<<<<<<<
  logs?: string;
};

// export const FuncNameContext = createContext()

const FunctionDetails = ({
  detailID,
  description,
  versHist,
  metric,
  warmData,
  arn,
  logs,
}: Props) => {
  // const [funcName, setFuncName] = useContext(FunctionContext);
  // const [data, setData, clickedFunction, setClickedFunction] =
  //   useContext(UserContext);

  const { funcName, setFuncName } = useContext(FunctionContext);
  const navigate = useNavigate();

  // const UserContext = createContext() //moved to HOME

  // const navigate = useNavigate();

  // const handleNameButtonClick = (e) => {
  //   setFuncName(e.target.value);
  //   console.log('name is ' + funcName);
  // };

  // console.log('clicked is ', funcName);

  // useEffect(() => {
  //   handleNameButtonClick(e)
  // }, [])

  // let versionCount = 0
  // let logCount = 0

  // if (name === 'testingfunc'){
  //   versionCount = 5
  //   logCount = 14
  // } else if (
  //   name === 'testingfunc2'
  // ){
  //   versionCount = 3
  //   logCount = 4
  // }else if(
  //   name === 'testfunc3'
  // ){
  //   versionCount = 1
  //   logCount = 6
  // }else if (
  //   name === 'myFunc1'
  // ){
  //   versionCount = 2
  //   logCount = 7
  // }

  return (
    <div className="flex flex-col items-center  bg-neutral-100 bg-opacity-40 w-full rounded-md">
      {/* FUNCTION PAGE WINDOW */}
      <div>
        <h1 className="font-bold text-2xl text-center mt-10 mb-6">
          {' '}
          Function Name: {funcName.toUpperCase()}
        </h1>
        {/* func detail summary */}
        <div className="text-center mb-5">
          {/* <h3>Versions Count: {versionCount}</h3>
          <h3>Logs Count: {logCount}</h3> */}
        </div>
        <div className="flex">
          {/* <button className="border-4 border-black">
            <Link to="/versions" state={{name:name, funcName: funcName}}>
              Version history BUTTON is {name}
            </Link><br></br>
    
          </button> */}

          <a
            onClick={() => {
              navigate('/versions');
            }}            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              Version History
              <br />
              for {funcName.toUpperCase()}
            </span>
          </a>

          <a
            onClick={() => {
              navigate('/metrics');
            }}            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              Metrics
              <br />
              for {funcName.toUpperCase()}
            </span>
          </a>

          <a
            onClick={() => {
              navigate('/warming');
            }}
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              Warm Functions
              <br />
              for {funcName.toUpperCase()}
            </span>
          </a>

          <a
            onClick={() => {
              navigate('/logs');
            }}
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              View Logs
              <br />
              for {funcName.toUpperCase()}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FunctionDetails;
