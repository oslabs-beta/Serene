import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunctionContext } from '../App';

const FunctionDetails = () => {
  const { funcName, setFuncName } = useContext(FunctionContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-opacity-40 w-full rounded-md">
      {/* FUNCTION PAGE WINDOW */}
      <div>
        <h1 className="font-bold text-2xl text-center mt-10 mb-6">
          {' '}
          Function Name: {funcName.toUpperCase()}
        </h1>
        <div className="text-center mb-5"></div>
        <div className="flex">
          <a
            onClick={() => {
              navigate('/versions');
            }}
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              Version History
              <br />
              for {funcName.toUpperCase()}
            </span>
          </a>
          <a
            onClick={() => {
              navigate('/metrics');
            }}
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              Metrics
              <br />
              for {funcName.toUpperCase()}
            </span>
          </a>
          <a
            onClick={() => {
              navigate('/warming');
            }}
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              Warm Functions
              <br />
              for {funcName.toUpperCase()}
            </span>
          </a>
          <a
            onClick={() => {
              navigate('/logs');
            }}
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              {' '}
              View Logs
              <br />
              for {funcName.toUpperCase()}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FunctionDetails;
