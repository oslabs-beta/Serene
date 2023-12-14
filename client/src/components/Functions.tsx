// import { FunctionContext } from '@/App';
import { FunctionContext } from '@/App';
import { useContext } from 'react';

type Props = {
  name: string;
};

const Functions = ({ name }: Props) => {
  const { funcName, setFuncName }: any = useContext(FunctionContext);

  const handleNameButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    
    setFuncName((e.target as HTMLInputElement).value);
  };

  return (
    <button
      className="flex flex-col items-center justify-center z-20 overflow-y-auto h-[40%]  my-5 
      border-2 shadow-md bg-neutral-100 bg-opacity-40 w-full p-4 mb-2 rounded-md border-black hover:bg-black hover:text-white transition duration-200 ease-in-out
      
      "
      onClick={(e) => handleNameButtonClick(e)}
      value={name}
    >
      FUNCTION NAME <br />
      IS {name.toUpperCase()}
    </button>
  );
};

export default Functions;
