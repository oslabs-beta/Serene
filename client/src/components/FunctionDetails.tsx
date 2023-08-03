import React from 'react';
import Metric from './Metric';
import VersionHistory from './VersionHistory';
import Warming from './Warning';

type Props = {
  detailID: number;
    name: string;
    description: string;
    versHist: string;
    metric: string;
    warmData: string
}

const FunctionDetails = ({detailID, name, description, versHist, metric, warmData}: Props) => {
  return (
    <div className="border-8 border-pink-400 my-4">
      <p> 
        ID is {detailID}, 
        Name is {name},
        Description is {description}
      </p>
      <button className="border-4 border-black">Version history is {versHist} </button><br/>

        {/* <Metric metric={metric}/> */}
      
      
      <button className="border-4 border-black">Warm Data is {warmData}</button><br/>
    </div>
  )
}

export default FunctionDetails