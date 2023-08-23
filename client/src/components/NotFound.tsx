import React from 'react';
import { Link } from 'react-router-dom';
import { CubeSpinner } from 'react-spinners-kit';
import AnimatedBackground from './AnimatedBackground';



const NotFound = () => {
  return (
    // MAIN DIV
    <div className="bg-gray-950 h-screen items-center flex justify-center">
      <div className="flex flex-col items-center">
        <div className="flex">
          <CubeSpinner color="white" />
          <h1 className="text-gray-200 font-extrabold text-9xl mr-2">404</h1>
          <CubeSpinner />
        </div>
        <div className='flex'>
        <h1 className="text-gray-200 font-bold text-4xl mr-2">
          Lost? Let's take you{' '}
        </h1>
          <span className='text-gray-200 font-bold text-4xl animate-bounce'>
            <Link
              to="/"
              className=" hover:underline hover:text-white "
            >
              home
            </Link>{' '}
          </span>
        </div>
      </div>
    </div>


  );
};

export default NotFound;
