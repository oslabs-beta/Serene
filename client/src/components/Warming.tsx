import React, { useState, useEffect} from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'
import {FetchLogs} from '../shared'
// import {FuncNameContext} from './FunctionDetails'

type Props = {
}



const Warming = ({}: Props) => {
  // const [allLogs, setAllLogs] = useState([])
    // const [funcName, setFuncName] = useContext(FuncNameContext)


    // console.log('im in warming ' + funcName)

  // useEffect(() => {
  //   // console.log('beginning to fetch')
  //   FetchLogs().then( funcLogs => {
  //     // console.log('setting data now')
  //     setAllLogs(funcLogs)
  //     console.log('logs are: ', funcLogs)
  //   })
  //   //data logic here
  //   }, [])



  return (
    <div>
        {/* TOP SECTION OF EVERY PAGE */}
        <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />    
        <h1 className='font-extrabold text-4xl font-mono'> KOMODO </h1>
        <RightSideBar />  
        </div> 


        <div>

        </div>

        
    </div>
  )
}

export default Warming