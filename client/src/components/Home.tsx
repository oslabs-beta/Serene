import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Dropdown } from 'tw-elements'
import Metric from './Metric'
import Functions from './Functions'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'
import PieChart from './PieChart'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'
import DoughnutChart from './DoughnutChart'
import FunctionDetails from './FunctionDetails'
import { mockFuncDetails } from '../shared'




type Props = {

}

const Home = ({}: Props) => {
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


          <FunctionDetails
              detailID={mockFuncDetails[0].id}
              name={mockFuncDetails[0].name}
              description={mockFuncDetails[0].description}
              versHist={mockFuncDetails[0].versHist}
              metric={mockFuncDetails[0].metric}
              warmData={mockFuncDetails[0].warmData}
              logs={mockFuncDetails[0].logs}
              
          
          />
        </div>
 
      </div>

    </div>
  )
}

export default Home

