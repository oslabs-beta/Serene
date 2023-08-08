import React, { useEffect, useState, createContext, useContext } from 'react';
import Metric from './Metric';
import VersionHistory from './VersionHistory';
import Warming from './Warming';
import Logs from './Logs';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

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
// export const FuncNameContext = createContext();

const FunctionDetails = ({
  detailID,
  name,
  description,
  versHist,
  metric,
  warmData,
  arn,
  logs,
}: Props) => {
  const allProps =
    detailID && name && description && versHist && metric && warmData && logs;
  const [funcName, setFuncName] = useState(name);
  const [data, setData, clickedFunction, setClickedFunction] =
    useContext(UserContext);

  // const UserContext = createContext() //moved to HOME

  const navigate = useNavigate();

  const handleNameButtonClick = (e) => {
    setClickedFunction(e.target.value);
    console.log('name is ' + funcName);
    // navigate('/logs');
  };

  // console.log('clicked is ', clickedFunction);

  // useEffect(() => {
  //   handleNameButtonClick(e)
  // }, [])

  return (
    <div className="border-2 shadow-md bg-neutral-100 bg-opacity-40 w-full p-4 mb-2 rounded-md border-black hover:bg-black hover:text-white transition duration-300 ease-in-out">
      {allProps ? (
        <>
          {/* FUNCTION PAGE WINDOW */}
          <div>
            <div>{/* LAMBDA FUNCTION CODE */}</div>
            <div>{/* 6METRIC MINI VIEWER  */}</div>
            Function DETAILS PAGE
            {/* BUTTONS DIV*/}
            <div>
              <p> Function detail ID is {detailID} </p>
              <p> function name is {name}</p>
              <p> function description is {description} </p>

              <div className="flex">
                <button className="border-4 border-black">
                  <Link to="/versions">
                    Version history BUTTON is {versHist}{' '}
                  </Link>
                </button>
                <button className="border-4 border-black">
                  <Link to="/metrics">View Metric BUTTON {metric}</Link>
                </button>
                <button className="border-4 border-black">
                  <Link to="/warming">Warm Data BUTTON is {warmData}</Link>
                </button>
                <button className="border-4 border-black">
                  <Link to="/logs">Logs BUTTON is {logs}</Link>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          {/* <FuncNameContext.Provider value={[funcName, setFuncName]}> 
               <Warming/>  */}

          <button onClick={(e) => handleNameButtonClick(e)} value={name}>
            <Link to="/logs">FUNCTION NAME IS {name}</Link>
          </button>
          {/* </FuncNameContext.Provider> */}
        </div>
      )}
    </div>
  );
};

export default FunctionDetails;
