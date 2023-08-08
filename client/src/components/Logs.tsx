import React, { useState, useEffect, useContext} from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'
import {FetchLogs} from '../shared'
import { UserContext } from '../App'
import {FuncNameContext} from './FunctionDetails'

type Props = {
}

const Logs = ({}: Props) => {
  const [allLogs, setAllLogs] = useState([])
  const [logStream, setLogStream] = useState('')
  const [ data, setData,clickedFunction, setClickedFunction ] = useContext(UserContext)
  // const [funcName, setFuncName] = useContext(FuncNameContext)

  // console.log('logging data in Logs ' + JSON.stringify(data))

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

  // console.log('Current Logname is ', clickedFunction)

  const handleLogClick = (e)=> {
    setLogStream(e.target.value)
  }
  useEffect(() => {console.log('this is logstream', logStream)},[logStream])

  const logName = 'testingfunc'
  const region = ''

  const FetchLogStreams = async () => {
    //need logName, streamName, region
    const body = {
      logName : {logName},
      streamName : {logStream},

    };
    try {
      const response = await fetch('/api/cloudwatch/getStreamDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      const data = await response.json();
      console.log('viewing logStream: ', data);

    } catch (error) {
      console.log('fetch log stream Error: ', error);
    }
  
  }
  
 

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