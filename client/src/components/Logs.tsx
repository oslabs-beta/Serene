import React, { useState, useEffect, useContext } from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSidebar';
import { FetchLogs } from '../shared';
import { testArray } from '../shared';
import LogStream from './LogStream';


type Props = {};

const Logs = ({}: Props) => {
  const [allLogs, setAllLogs] = useState([]);
  const [logStream, setLogStream] = useState('');
  const [logArray, setLogArray] = useState([''])
  // const [logData, setLogData] = useState([])
  // const [data, setData, clickedFunction, setClickedFunction] =
  //   useContext(UserContext);
  // const [funcName, setFuncName] = useContext(FuncNameContext)

  // console.log('logging data in Logs ' + JSON.stringify(data))

  useEffect(() => {
    // console.log('beginning to fetch')
    FetchLogs().then((funcLogs) => {
      // console.log('setting data now')
      setAllLogs(funcLogs);
      // setLogStream(funcLogs[1])
      console.log('logs are: ', funcLogs);
    });
    //data logic here
  }, []);

  // console.log('Current Logname is ', clickedFunction)

  const handleLogClick = (e) => {
    setLogStream(e.target.value);
  };
  useEffect(() => {
    console.log('this is logstream', logStream);
  }, [logStream]);

  const funcLogName = 'testingfunc';
  const region = 'us-east-1';

  const FetchLogStreams = async () => {
    //need logName, streamName, region
    const body = {
      funcLogName,
      streamName: logStream,
      region,
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
      setLogArray(data)
      console.log('return data ' , data)
      return data;
    } catch (error) {
      console.log('fetch log stream Error: ', error);
    }
  };

  useEffect(() => {
     const fetchData = async () => {
      await FetchLogStreams();
     }
     fetchData();
  },[logStream])
  

  console.log('LOG ARRAY IS HERE', logArray)

  return (
    <div>
      {/* TOP SECTION OF EVERY PAGE */}
      <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />
        <h1 className="font-extrabold text-4xl font-mono"> KOMODO </h1>
        <RightSideBar />
      </div>
      <div className='flex'>
        {/* this is where all the streamlogs are */}
        <div className='w-2/5 my-5 ml-5 flex flex-col flex-wrap break-words' >
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
        <div className='ml-10 mr-5 my-6 flex flex-col items-center w-full border-2 border-black p-2 bg-black rounded-md text-gray-400'>
          <LogStream
          logStreamArr = {logArray}
          />
        </div>
  
      </div>

    </div>
  );
};

export default Logs;
