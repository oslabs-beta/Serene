import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Dropdown } from 'tw-elements';
import Metric from './Metric';
import Functions from './Functions';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSidebar';
import PieChart from './PieChart';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';
import DoughnutChart from './DoughnutChart';
import FunctionDetails from './FunctionDetails';
import { mockFuncDetails, FetchFunctions } from '../shared';

import { FunctionContext } from '../App';

type Props = {};

const Home = ({}: Props) => {
  const [isRightMenuToggled, setIsRightMenuToggled] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const { funcName, setFuncName } = useContext(FunctionContext);

  useEffect(() => {
    // console.log('beginning to fetch')

    FetchFunctions().then((funcData) => {
      // console.log('setting data now')
      setData(funcData);
      console.log('data is reset: ', funcData);
    });
    //data logic here
  }, []);

  // console.log('start of funcname', funcName)

  return (
    <div className="bg-gray-200 h-screen">
      <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />
        <h1 className="font-extrabold text-4xl font-mono"> SERENE </h1>
        <RightSideBar />
      </div>
      {/* <div className="mb-4"> FOOTER </div> */}
      {/* <nav className="bg-gray-300 border-4 border-black"> THIS IS NAVBAR
          
        
        </nav> */}

      {/* <div className="border-4 border-pink-300 flex flex-col items-center"> */}

      {/* <div className='max-w-md '> */}

      {/* <UserContext.Provider value={data}> */}

      <FunctionDetails />

      {/* </UserContext.Provider> */}

      {/* </div> */}

      {/* </div> */}
    </div>
  );
};

export default Home;
