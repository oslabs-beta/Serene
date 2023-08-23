import React from 'react';
import { JellyfishSpinner, GridSpinner } from 'react-spinners-kit';
type Props = {
  logStreamArr: [];
  isLoading?: boolean;
};

type Log = {
  message: string,
  timestamp: string
}

const LogStream = ({ logStreamArr, isLoading }: Props) => {
  return (

    <div>
      {logStreamArr.length ? (
        isLoading ? (
          <div className="flex justify-center h-full">
            <JellyfishSpinner size={120} color="white" />
          </div>
        ) : (
          logStreamArr.map((log: Log) => (
            <div className="my-5">
              <p>Message: {log.message}</p>
              <p>Time Stamp: {log.timestamp}</p>
            </div>
          ))
        )
      ) : (
        <div className="flex mt-5 align-center">
          <GridSpinner />
          <p className="mx-4">Please choose a logstream</p>
          <GridSpinner />
        </div>
      )}
    </div>
  );
};

export default LogStream;
