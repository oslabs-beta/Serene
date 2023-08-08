import React, { useState, useEffect} from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'
import {FetchLogs} from '../shared'

type Props = {
}

const Logs = ({}: Props) => {
  const [allLogs, setAllLogs] = useState([])
  const [logStream, setLogStream] = useState('')

  useEffect(() => {
    // console.log('beginning to fetch')
    FetchLogs().then( funcLogs => {
      // console.log('setting data now')
      setAllLogs(funcLogs)
      // setLogStream(funcLogs[1])
      console.log('logs are: ', funcLogs)
    })
    //data logic here

  }, [])


  const handleLogClick = (e)=> {
    setLogStream(e.target.value)
  }
  useEffect(() => {console.log('this is logstream', logStream)},[logStream])

  

  return (
    <div>
        {/* TOP SECTION OF EVERY PAGE */}
        <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />    
        <h1 className='font-extrabold text-4xl font-mono'> KOMODO </h1>
        <RightSideBar />  
        </div> 


       {allLogs.map((log) => 
        <button className='block' value={log} onClick={(e)=> {handleLogClick(e)}}>logStream : {log}</button>
       )}

        
    </div>
  )
}

export default Logs