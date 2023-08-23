import {useState, useEffect} from 'react'

export const profile = "P R O F I L E"


export const FetchFunctions = async () => {
      try{
        const response = await fetch('/api/lambda/functions')
        const data = await response.json();
        return data;
      } catch (error) {
        console.log('Error is: ', error)
      }
  
}


export const FetchUser = async () => {
  try{
    const response = await fetch('/api/user/edit')
    const data = response.json();
    return data;
  } catch (error) {
    console.log('Error is: ', error)
  }
}


const funcName = 'testingfunc'
const sortBy = 'TimestampDescending'
const period = '5 minutes'
const startDate = '1w'
const region = 'us-east-1'

export const FetchMetrics = async () => {
  const body = {
    funcName, 
    sortBy, 
    period, 
    startDate, 
    region
  };
  try {
    const response = await fetch('/api/cloudwatch/getMetrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log('fetched Logs: ', data);
    console.log('fetch Logs successful');
    return data; 
  } catch (error) {
    console.log('NOW Error: ', error);
  }
}

