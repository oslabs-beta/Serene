import React, { useContext, useState, useEffect } from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from '@material-tailwind/react';
import { FunctionContext } from '@/App';

import {
  PushSpinner,
  TraceSpinner,
  RainbowSpinner,
  RingSpinner,
  SwishSpinner,
  PongSpinner,
  MetroSpinner,
  JellyfishSpinner,
} from 'react-spinners-kit';

type Props = {
  // name: string;
  // funcName: string;
  // setFuncName: Function;
};

const VersionHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { funcName, setFuncName } = useContext(FunctionContext);
  const [versions, setVersions] = useState({});
  const [aliases, setAliases] = useState([])

  const navigate = useNavigate();
  // const [popoverViewing, setPopoverViewing] = useState(Array(mockVersionData))

  // useEffect(() => {
  //   setTimeout( () => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  console.log(`this is version before fetching ${versions}`);

  const FetchVersions = async () => {
    const body = {
      funcName,
    };
    try {
      const response = await fetch('api/versions/versionList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log('fetched versions: ', JSON.stringify(data));
      // console.log('fetch versions successful');
      setVersions(data);
      return data;
    } catch (error) {
      console.log('Error in versions: ', error);
    }
  };

  useEffect(() => {
    if (funcName !== 'SELECT A FUNCTION') {
      const fetchVersions = async () => {
        await FetchVersions();
      };
      fetchVersions();
    }
  }, [funcName]);

  const mockCode1 = () => {
    const arr = ['info1', 'info2', 'info3', 'info4', 'info5'];
    Math.floor(arr.length / 2);
    const response = {
      statusCode: 200,
      body: JSON.stringify('error fixed'),
    };
    return response;
  };
  const mockCode2 = () => {
    const arr = ['info1', 'info2', 'info3'];
    const response = {
      statusCode: 200,
      body: JSON.stringify('testing response'),
    };
    return response;
  };
  const mockCode3 = () => {
    const arr = ['info1', 'info5'];
    Math.floor(arr.length / 2);
    const response = {
      statusCode: 200,
      body: JSON.stringify('version3'),
    };
    return response;
  };
  const mockCode4 = () => {
    const arr = ['info1', 'info2', 'info3', 'info5'];
    const response = {
      statusCode: 200,
      body: JSON.stringify('testing errors'),
    };
    return response;
  };
  const mockCode5 = () => {
    const arr = ['info1', 'info2', 'info3', 'info4', 'info5'];
    Math.floor(arr.length / 2);
    const response = {
      statusCode: 200,
      body: JSON.stringify('error fixed'),
    };
    return response;
  };

  const FetchAliases = async () => {
    const body = {
      funcName,
    };
    try {
      const response = await fetch('api/versions/getAlias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log('fetched aliases: ', JSON.stringify(data));
      // console.log('fetch versions successful');
      setAliases(data);
      return data;
    } catch (error) {
      console.log('Error in versions/alias: ', error);
    }
  };

  useEffect(() => {
    if (funcName !== 'SELECT A FUNCTION') {
      const fetchAlias = async () => {
        await FetchAliases();
      };
      fetchAlias();
    }
  }, [funcName]);

  return (
    <div>
      {/* TOP SECTION OF EVERY PAGE */}
      <div className="flex justify-between items-center bg-gray-300 h-24">
        {/* <LeftSideBar funcName={funcName} setFuncName={setFuncName} />     */}
        <LeftSideBar />
        <h1 className="font-extrabold text-4xl font-mono"> SERENE </h1>
        <RightSideBar />
      </div>
      <div className="flex justify-center">
        {/* <div>CURRENT FUNC NAME STATE IS {funcName}</div> */}

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
          onClick={() => {
            navigate('/home');
          }}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-200 group-hover:text-white ease">
            Home
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

        <a
          onClick={() => {
            navigate('/logs');
          }}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-200 group-hover:text-white ease">
            View Logs
          </span>
        </a>
      </div>

      {/*BODY DIV */}

      <div className="h-screen w-full flex justify-center">
        <div className="flex flex-col my-3 border-2 border-black bg-gray-200 rounded-md h-full w-3/4">
          <div className='border-4 border-green-200'>
            
          {aliases.length}
            
          {Object.keys(versions).length !== 0 ? (
            Object.keys(versions)
              // {/* { versions !== null ? Object.keys(versions) */}
              .reverse()
              .map((item) => (
                <div className="border-4 border-pink-200 group flex w-1/2 ml-auto">
                  {/* Remove justify-between class */}
                  {/* <div></div> HERE for SPACING ONLY */}
                  <Popover placement="left">
                    <PopoverHandler className="w-20 p-1 mt-2 mb-1 transition duration-100 ease-in-out group-hover:scale-150 ml-0">
                      <Button>Alias {item}</Button>
                    </PopoverHandler>
                    <PopoverContent className="border-black border-2 w-1/3">
                      {/* <span>more version {item.code.toString()} details here</span> */}
                    </PopoverContent>
                  </Popover>
                  <div className="flex relative w-10 h-20 transition-all duration-200 ease-in-out transform-growth group-hover:w-7/12 ml-10">
                    <svg className="w-full h-full overflow-visible">
                      <defs>
                        <marker
                          id="m"
                          markerWidth="4"
                          markerHeight="8"
                          refX="0"
                          refY="1"
                          viewBox="0 0 1 2"
                        >
                          <polygon points="0,0 1,1 0,2" fill="black" />
                        </marker>
                      </defs>
                      <line
                        x1="0"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        strokeWidth="2"
                        markerEnd="url(#m)"
                        stroke="black"
                      />
                    </svg>
                    <span className="group-hover:bg-black group-hover:text-white bg-white rounded-md p-2 transition duration-100 ease-in-out group-hover:scale-110 text-center flex items-center ml-auto">
                      {' fdsf'}
                      {/* Add ml-auto class to align the span to the right */}
                      {/* alias {item.alias} */}
                      {/* version.item} */}
                    </span>
                  </div>
                </div>
              ))
          ) : (
            <div className="flex justify-center my-3 border-4 bg-gray-200 rounded-md h-full w-full ">
              <h3 className="font-semibold">PLEASE SELECT A FUNCTION</h3>
            </div>
          )}
        </div>
        </div>
        {/* <div>{Object.keys(versions).length}</div> */}
      </div>
    </div>
  );
};

export default VersionHistory;