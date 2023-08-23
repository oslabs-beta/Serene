import { useState, useContext } from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSidebar';
import FunctionDetails from './FunctionDetails';
import serene from '../assets/serene.png';

import { FunctionContext } from '../App';

type Props = {};

const Home = ({}: Props) => {
  const [isRightMenuToggled, setIsRightMenuToggled] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const { funcName, setFuncName }: any = useContext(FunctionContext);

  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />

        <a
          type="button"
          target="_blank"
          className="w-1/6"
        >
          <img src={serene} alt="Serene image" className="py-1" />
        </a>

        <RightSideBar />
      </div>

      <div className="mt-10">
        <FunctionDetails />{' '}
      </div>

      <div className="bg-gray-200 text-black fixed bottom-0 py-4 left-0 w-full">
        <div className="ml-3">&copy; SERENE 2023 </div>
      </div>
    </div>
  );
};

export default Home;
