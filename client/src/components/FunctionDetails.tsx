import React, { useEffect, useState, createContext, useContext } from 'react';
import Metric from './Metric';
import VersionHistory from './VersionHistory';
import Warming from './Warming';
import Logs from './Logs';
import { Link, useNavigate } from 'react-router-dom';
// import { UserContext } from '../App';

type Props = {
  detailID?: number;
  name: string;
  description?: string;
  versHist?: string;
  metric?: string;
  warmData?: string;
  arn?: string; //<<<<<<<<<
  logs?: string;
  funcName: string;
  setFuncName: Function;
};

// export const FuncNameContext = createContext()

const FunctionDetails = ({
  detailID,
  name,
  description,
  versHist,
  metric,
  warmData,
  arn,
  logs,
  funcName,
  setFuncName,
}: Props) => {
  // const [funcName, setFuncName] = useState(name);
  // const [data, setData, clickedFunction, setClickedFunction] =
  //   useContext(UserContext);

  // const UserContext = createContext() //moved to HOME

  // const navigate = useNavigate();

  // const handleNameButtonClick = (e) => {
  //   setFuncName(e.target.value);
  //   console.log('name is ' + funcName);
  // };

  // console.log('clicked is ', clickedFunction);

  // useEffect(() => {
  //   handleNameButtonClick(e)
  // }, [])

  return (
    <div className="flex flex-col items-center  bg-neutral-100 bg-opacity-40 w-full rounded-md">
      {/* FUNCTION PAGE WINDOW */}
      <div>
        <h1 className="font-bold text-2xl text-center mt-10 mb-6">
          {' '}
          Function Name: {name}
        </h1>

        <div className="flex">
          {/* <button className="border-4 border-black">
            <Link to="/versions" state={{name:name, funcName: funcName}}>
              Version history BUTTON is {name}
            </Link><br></br>
    
          </button> */}

          <a
            href="/versions"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute h-0 transition-all duration-300 origin-center rotate-45 -translate-x-45 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              Version History
            </span>
          </a>

          <a
            href="/metrics"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-36 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              Metrics
            </span>
          </a>

          <a
            href="/warming"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 translate-x-5 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              Warm Functions
            </span>
          </a>

          <a
            href="/logs"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 translate-x-5 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              View Logs
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FunctionDetails;
