import React, { useState} from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'

type Props = {
}

const Warming = ({}: Props) => {



  return (
    <div>
        {/* TOP SECTION OF EVERY PAGE */}
        <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />    
        <h1 className='font-extrabold text-4xl font-mono'> KOMODO </h1>
        <RightSideBar />  
        </div> 


 
  

        
    </div>
  )
}

export default Warming