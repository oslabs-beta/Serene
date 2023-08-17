import React, { useState, useEffect, useContext } from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSidebar';
import LogStream from './LogStream';
import {
  PushSpinner,
  TraceSpinner,
  RainbowSpinner,
  RingSpinner,
  SwishSpinner,
  PongSpinner,
  MetroSpinner,
  JellyfishSpinner,
  GridSpinner,
} from 'react-spinners-kit';
import { FunctionContext } from '@/App';
import { useNavigate } from 'react-router-dom'

type Props = {};

const Logs = ({}: Props) => {
  const [allLogs, setAllLogs] = useState([]);
  const [logStream, setLogStream] = useState('');
  const [logArray, setLogArray] = useState(['']);
  // const [logData, setLogData] = useState([])
  // const [data, setData, clickedFunction, setClickedFunction] =
  //   useContext(UserContext);
  // const [funcName, setFuncName] = useContext(FuncNameContext)
  const [isLoading, setIsLoading] = useState(false);
  const { funcName, setFuncName } = useContext(FunctionContext);

  // console.log('logging data in Logs ' + JSON.stringify(data))
  // const funcLogName = funcName;
  const region = 'us-east-1';

  const FetchLogs = async () => {

    const navigate = useNavigate();

    const body = {
      funcName,
      region,
    };
    try {
      const response = await fetch('/api/cloudwatch/getLogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = response.json();
      return data;
    } catch (error) {
      console.log('Error is: ', error);
    }
  };

  useEffect(() => {
    // console.log('beginning to fetch')
    if (funcName !== 'SELECT A FUNCTION') {
      FetchLogs().then((funcLogs) => {
        // console.log('setting data now')
        setAllLogs(funcLogs);
        // setLogStream(funcLogs[1])
        console.log('logs are: ', funcLogs);
      });
    }
    //data logic here
  }, [funcName]);

  // funcName !== 'FUNCTIONNAME' ? (useEffect(() => {
  //   // console.log('beginning to fetch')
  //   FetchLogs().then((funcLogs) => {
  //     // console.log('setting data now')
  //     setAllLogs(funcLogs);
  //     // setLogStream(funcLogs[1])
  //     console.log('logs are: ', funcLogs);
  //   });
  //   //data logic here
  // }, [funcName])) : null

  // console.log('Current Logname is ', clickedFunction)

  const handleLogClick = (e) => {
    console.log('starting load state is ', isLoading);
    setIsLoading(true);
    setLogStream(e.target.value);
  };
  console.log('updated load state is ', isLoading);

  // useEffect(() => {
  //   console.log('this is logstream', logStream);
  // }, [logStream]);
  
  const FetchLogStreams = async () => {
    //need logName, streamName, region
    const body = {
      logName : funcName,
      streamName: logStream
    };
    try {
      const response = await fetch('/api/cloudwatch/getStreamDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      setLogArray(data);
      console.log('return data ', data);
      return data;
    } catch (error) {
      console.log('fetch log stream Error: ', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await FetchLogStreams();
    };
    fetchData();
    setIsLoading(false);
    console.log('after loading state is ', isLoading);
  }, [logStream]);

  console.log('LOG ARRAY IS HERE', logArray);

  return (
    <div>
      {/* TOP SECTION OF EVERY PAGE */}
      <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />
        <h1 className="font-extrabold text-4xl font-mono"> SERENE </h1>
        <RightSideBar />
      </div>

      <div className="flex justify-center">
        <a
       onClick={() => {
        navigate("/home")}}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-200 group-hover:text-white ease">
            Home
          </span>
        </a>
        <a
         onClick={() => {
          navigate("/versions")}}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-200 group-hover:text-white ease">
            Version History
          </span>
        </a>

        <a
         onClick={() => {
          navigate("/metrics")}}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-200 group-hover:text-white ease">
            Metrics
          </span>
        </a>

        <a
onClick={() => {
  navigate("/warming")}}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-200 group-hover:text-white ease">
            Warm Functions
          </span>
        </a>
      </div>

      <div>THIS IS current {funcName} </div>

      <div className="flex">
        {/* this is where all the streamlogs are */}
        <div className="w-2/5 my-5 ml-5 flex flex-col flex-wrap break-words">
          {allLogs.map((log) => (
            <button
              className="w-full border-2 shadow-md p-2 bg-neutral-100 bg-opacity-40 my-1 rounded-md border-black hover:bg-black hover:text-white transition duration-300 ease-in-out"
              value={log}
              key={log}
              onClick={(e) => {
                handleLogClick(e);
              }}
            >
              logStream : {log}
            </button>
          ))}
        </div>

        <div className="ml-10 mr-5 my-6 flex flex-col items-center w-full border-2 border-black p-2 bg-black rounded-md text-gray-400">
          {isLoading ? (
            <div className="flex justify-center h-full">
              <JellyfishSpinner size={120} color="white" />
            </div>
          ) : (
            <LogStream logStreamArr={logArray} isLoading={isLoading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Logs;
