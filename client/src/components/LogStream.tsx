import React from 'react'
import { testArray } from '../shared'
import {
  PushSpinner, TraceSpinner, RainbowSpinner,
  RingSpinner, SwishSpinner, PongSpinner,
  MetroSpinner, JellyfishSpinner, GridSpinner
}
  from "react-spinners-kit"
type Props = {
  logStreamArr : []
  isLoading: boolean;
}

const LogStream = ({logStreamArr, isLoading}: Props) => {

  


  return (
    // first IF is has anything been clicked? if not, no data showing
    // else do the below

        // if the current state is loading, show the loader jellyfish
        // else show the actual data

    <div>
        { logStreamArr.length ? (
           isLoading ? (
            <div className="flex justify-center h-full">
              <JellyfishSpinner size={120} color="white"  />
            </div>     
          ) : (
            logStreamArr.map(log => (
              <div className = 'my-5'>
                <p>Message: {log.message}</p>
                <p>Time Stamp: {log.timestamp}</p>
              </div>
          ))
        )
      
        ) : 
        <div className='flex mt-5 align-center'>
          <GridSpinner />
          <p className='mx-4'>Please choose a logstream</p>
          <GridSpinner />
        </div>
        
            }  
    </div>
          
  )
}

export default LogStream