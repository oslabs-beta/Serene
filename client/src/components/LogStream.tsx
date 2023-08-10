import React from 'react'
import { testArray } from '../shared'

type Props = {
  logStreamArr : []
}

const LogStream = ({logStreamArr}: Props) => {
  console.log('hi, im in logstream now', logStreamArr)



  return (


    <div>
        { logStreamArr.length ?
          logStreamArr.map(log => (
          <div className = 'my-5'>
            <p>Message: {log.message}</p>
            <p>Time Stamp: {log.timestamp}</p>
          </div>
        )) : (
            <p>Please Select A Log Stream</p>            
        )
        }
        
    </div>
  )
}

export default LogStream