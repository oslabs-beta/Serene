import React, { useState, useEffect, useContext } from 'react'
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
import { mockFuncDetails , FetchFunctions} from '../shared'

import { UserContext } from '../App';



type Props = {

}

const Home = ({}: Props) => {
  const [isRightMenuToggled, setIsRightMenuToggled] = useState<boolean>(false);
  const [data, setData] = useState([])



  // useEffect(() => {
  //   // console.log('beginning to fetch')
  //   FetchFunctions().then( funcData => {
  //     // console.log('setting data now')
  //     setData(funcData)
  //     console.log('data is reset: ', funcData)
  //   })
  //   //data logic here
    

  //   }, [])






  return (
    <div className='bg-gray-200 h-screen'> 
      <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />    
        <h1 className='font-extrabold text-4xl font-mono'> KOMODO </h1>
        <RightSideBar />  
        </div> 
        
        <div className="border-4 border-black flex flex-col items-center">
   
        <div className='max-w-xs '>

        <UserContext.Provider value={data}>
         
        <FunctionDetails
              detailID={mockFuncDetails[0].id}
              name={mockFuncDetails[0].name}
              description={mockFuncDetails[0].description}
              versHist={mockFuncDetails[0].versHist}
              metric={mockFuncDetails[0].metric}
              warmData={mockFuncDetails[0].warmData}
              logs={mockFuncDetails[0].logs}  /> 

          
        </UserContext.Provider>
              
          
        
        </div>
 
      </div>

    </div>
  )
}

export default Home

