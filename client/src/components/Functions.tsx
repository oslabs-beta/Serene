// import { FunctionContext } from '@/App';
import { FunctionContext } from '@/App';
import React, { useState, useContext, useEffect } from 'react';
import FunctionDetails from './FunctionDetails';
// import FunctionContext from '../App'

type Props = {
  name: string;
};

const Functions = ({ name }: Props) => {
  // const [funcName, setFuncName] = useState(FunctionContext); //already prop drilliing
  // console.log('funcName at start of functions', funcName)

  // const useContextReturnValue = useContext(FunctionContext);
  const { funcName, setFuncName } = useContext(FunctionContext);

  const handleNameButtonClick = (e) => {
    console.log('target is ', e.target.value);
    setFuncName(e.target.value);
    // console.log('name is ' + name);
  };
  console.log('funcName after handlebutton in functions component', funcName);

  return (
    <button
      className="flex flex-col items-center justify-center z-20 overflow-y-auto h-[40%]  my-5 
      border-2 shadow-md bg-neutral-100 bg-opacity-40 w-full p-4 mb-2 rounded-md border-black hover:bg-black hover:text-white transition duration-200 ease-in-out
      
      "
      onClick={(e) => handleNameButtonClick(e)}
      value={name}
    >
      {/* <Link to="/logs"> */}
      FUNCTION NAME <br />
      IS {name.toUpperCase()}
      {/* </Link> */}
    </button>
  );
};

export default Functions;
