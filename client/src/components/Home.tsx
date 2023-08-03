import React, { useState } from 'react'
import { Dropdown } from 'tw-elements'
import Metric from './Metric'
import Functions from './Functions'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'
import PieChart from './PieChart'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'
import DoughnutChart from './DoughnutChart'

type Props = {
  metric: string;
}

const Home = ({metric}: Props) => {
  const [isRightMenuToggled, setIsRightMenuToggled] = useState<boolean>(false);



  return (
    <div className='bg-gray-200 h-screen'>
      <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />    

        <h1 className='font-extrabold text-4xl font-mono'> KOMODO </h1>
        
  
        <RightSideBar /> 
        </div>
        <div className="border-4 border-black flex flex-col items-center">
   
        <div className='max-w-xs '>
          <PieChart/> 
          <BarGraph />
          <DoughnutChart />
          <LineGraph />
        </div>
 
      </div>

    </div>
  )
}

export default Home

