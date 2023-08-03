import React, { useState } from 'react'
import { Dropdown } from 'tw-elements'
import Metric from '../components/Metric'
import Functions from './Functions'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'


type Props = {}

const Home = (props: Props) => {
  const [isRightMenuToggled, setIsRightMenuToggled] = useState<boolean>(false);



  return (
    <div >
      <div className="flex justify-between bg-gray-400 h-24">
        {/* LEFT SIDE MENU */}

        {/* <button>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>
        </button> */}

        <LeftSideBar />

        {/* function drop down menu */}
        {/* <div>
    <Dropdown>
          <ul>
            <li> Option 1</li> 
            <li> Option 2</li> 
            <li> Option 3</li> 
            <li> Option 4</li> 
            
            </ul>  
        </Dropdown> 

        </div> */}
    

        <h1> KOMODO </h1>
        
 
        {/* <button>MENU BUTTON HERE</button> */}
        <RightSideBar /> 
        </div>
        <div className="">MainSection
      <Functions/>
      </div>

    </div>
  )
}

export default Home

