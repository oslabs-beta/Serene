import React, { useState, useEffect, useRef } from 'react';

import PieChart from './PieChart'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'
import DoughnutChart from './DoughnutChart'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'


type Props = {
};



const Metric = ( {}: Props)=> {

  const [currentChart, setCurrentChart] = useState('pie')

  const handleClick = (chart:string) => {
    setCurrentChart(chart)
  }

  return (
    <div>


              {/* TOP SECTION OF EVERY PAGE */}
              <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />    
        <h1 className='font-extrabold text-4xl font-mono'> KOMODO </h1>
        <RightSideBar />  
        </div> 
        
        {/* body div */}
        <div className='flex flex-col items-center justify-center'>
          <div className="w-1/4">
            { ( () => {
              switch (currentChart) {
                case 'pie':
                  return <PieChart />
                case 'bar':
                  return <BarGraph />
                case 'doughnut':
                  return <DoughnutChart />
                case 'line':
                  return  <LineGraph />
                default: 
                  return null;
              }
            })
            () // immediately invokes the currentChart
            }
          </div>
         {/* button div */}
        <div className="mt-20 fixed bottom-20">
          <button onClick={()=> handleClick('pie')} className="relative inline-block text-lg group mx-3">
            <span className="relative  z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Pie Chart</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </button>
          <button onClick={()=> handleClick('bar')} className="relative inline-block text-lg group mx-3">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Bar Graph</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </button>
          <button onClick={()=> handleClick('doughnut')} className="relative inline-block text-lg group mx-3">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Doughnut Chart</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </button>
          <button onClick={()=> handleClick('line')} className="relative inline-block text-lg group mx-3">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Line Graph</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </button>
          {/*COULD'VE OPTION+SHIFT++DOWN....... */}
        </div>
        </div>
    </div> 
  );
};

export default Metric;


