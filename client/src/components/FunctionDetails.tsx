import React from 'react';
import Metric from './Metric';
import VersionHistory from './VersionHistory';
import Warming from './Warning';
import { Link } from 'react-router-dom'

type Props = {
    detailID?: number;
    name: string;
    description?: string;
    versHist?: string;
    metric?: string;
    warmData?: string
}

const FunctionDetails = ({detailID, name, description, versHist, metric, warmData}: Props) => {
  const allProps = detailID && name && description && versHist && metric && warmData;


  return (
    <div className="border-2 w-full p-5 my-2 rounded-md border-black hover:bg-black hover:text-white transition duration-300 ease-in-out">
      {
          allProps ? (
          <>
      {/* FUNCTION PAGE WINDOW */}
      <div> 
        <div>
        {/* LAMBDA FUNCTION CODE */}
        </div>
        <div>
        {/* 6METRIC MINI VIEWER  */}

        </div>

   Function DETAILS PAGE
      {/* BUTTONS DIV*/}

      <div> 
        <p> Function detail ID is {detailID} </p>
        <p> function name is {name}</p>
        <p> function description is {description} </p>

        <div className="flex">
        <button className="border-4 border-black">
          <Link to="/versions">
          Version history BUTTON is {versHist} </Link >
          </button>
        <button className="border-4 border-black">
        <Link to="/metrics">
          View Metric BUTTON {metric}</Link >
          </button>
        <button className="border-4 border-black">
        <Link to="/warming">
           Warm Data BUTTON  is {warmData}</Link >
          </button>
      </div>

        </div>


      </div>

      </>) : (


        <div>
          {/* FUNCTION NAME ONLY */}
          <p> FUNCTION NAME IS {name} </p>
        </div>

      )
    }
    </div>
  )
}

export default FunctionDetails