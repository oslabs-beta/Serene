import React from "react";
import {Link} from "react-router-dom"
type Props = {};

const NotFound = (props: Props) => {
  return (
    // MAIN DIV
    <div className="bg-gray-950 h-screen items-center flex justify-center">
      <div className='flex flex-col'>
        <h1 className="text-gray-200 font-extrabold text-9xl">404</h1>
        <h1 className="text-gray-200 font-bold text-4xl">
          Lost? Let's take you {" "} 
          <span>
            <Link
              to="/"
              className="hover:underline hover:text-white"
            >
              home
            </Link>{' '}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
