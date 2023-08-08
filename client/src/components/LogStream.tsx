import React from 'react'
import { testArray } from '../shared'

type Props = {
  logStreamArr : []
}

const LogStream = ({logStreamArr}: Props) => {
  console.log('hi, im in logstream now', logStreamArr)



  return (


    <div>
        {logStreamArr.map(log => (
          <div>
            <p>{log.message}</p>
            <p>{log.timestamp}</p>
          </div>
        ))}
        
    </div>
  )
}

export default LogStream