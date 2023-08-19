import React from 'react';
import { Link } from 'react-router-dom';
import {
  CubeSpinner,
} from 'react-spinners-kit';
import AnimatedBackground from './AnimatedBackground';
import Popup from 'reactjs-popup'


type Props = {};

const NotFound = (props: Props) => {
  return (
    // MAIN DIV
    // <div className="bg-gray-950 h-screen items-center flex justify-center">
    //   <div className="flex flex-col items-center">
    //     <div className='flex'>
    //       <CubeSpinner color="white" />
    //       <h1 className="text-gray-200 font-extrabold text-9xl mr-2">404</h1>
    //       <CubeSpinner />

    //     </div>
    //     <h1 className="text-gray-200 font-bold text-4xl">
    //       Lost? Let's take you{" "}
    //       <span>
    //         <Link to="/" className="hover:underline hover:text-white">
    //           home
    //         </Link>{" "}
    //       </span>
    //     </h1>
    //   </div>
    // </div>

    <div>
      {/* <AnimatedBackground />  */}
    
{/* <!-- Modal toggle --> */}  <div className='bg-gray-400 h-screen mt-20 ml-10'>
      <Popup trigger={<button> Trigger, please</button>} position="right center">
        <div className='fixed h-1/3 border-2 border-white w-1/2'>
          Update your ARN here<br />
          <form>
            <label htmlFor='arnInput' className='block mb-2'>
              ARN:
            </label>
            <input
              type='text'
              id='arnInput'
              className='border border-gray-300 p-1 rounded-lg w-full'
              placeholder='Enter ARN...'
            />
            <button type='submit' className='border-2 border-black mt-2'>
              Submit Arn
            </button>
          </form>
        </div>
      </Popup>
    </div>

    </div>
  );
};

export default NotFound;
