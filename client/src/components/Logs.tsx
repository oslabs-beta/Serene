import React, { useState, useEffect, useContext } from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSidebar';
import LogStream from './LogStream';
import { JellyfishSpinner, GridSpinner } from 'react-spinners-kit';
import { FunctionContext, RegionContext } from '@/App';
import { useNavigate } from 'react-router-dom';
import serene from '../assets/serene.png';

const Logs = () => {
  const [allLogs, setAllLogs] = useState([]);
  const [logStream, setLogStream] = useState('');
  const [logArray, setLogArray] = useState(['']);

  const { funcName, setFuncName }: any = useContext(FunctionContext);
  // const { region, setRegion} = useContext(RegionContext);

  const navigate = useNavigate();

  const FetchLogs = async () => {
    const body = {
      funcName,
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
    if (funcName !== 'SELECT A FUNCTION') {
      FetchLogs().then((funcLogs) => {
        setAllLogs(funcLogs);
      });
    }
  }, [funcName]);

  const handleLogClick = (e) => {
    setLogStream(e.target.value);
  };

  useEffect(() => {
    console.log('this is logstream', logStream);
  }, [logStream]);

  const FetchLogStreams = async () => {
    //need logName, streamName, region
    const body = {
      logName: funcName,
      streamName: logStream,
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
      console.log('return data from fetchlogstreams', data);
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
  }, [logStream]);

  console.log('LOG ARRAY IS HERE', logArray);

  return (
    <div>
      {/* TOP SECTION OF EVERY PAGE */}
      <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />
        <button
          onClick={() => {
            navigate('/home');
          }}
          className="w-1/6"
        >
          <img src={serene} alt="Serene image" className="py-1" />
        </button>{' '}
        <RightSideBar />
      </div>

      <div className="flex justify-center">
        <a
          onClick={() => {
            navigate('/home');
          }}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-200 group-hover:text-white ease">
            Home
          </span>
        </a>
        <a
          onClick={() => {
            navigate('/versions');
          }}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-200 group-hover:text-white ease">
            Version History
          </span>
        </a>

        <a
          onClick={() => {
            navigate('/metrics');
          }}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-200 group-hover:text-white ease">
            Metrics
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
            Warm Functions
          </span>
        </a>
      </div>

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
          <LogStream logStreamArr={logArray as any} />
        </div>
      </div>
      <div className="bg-gray-200 text-black fixed bottom-0 py-4 left-0 w-full">
        <div className="ml-3">&copy; SERENE 2023 </div>
      </div>
    </div>
  );
};

export default Logs;
