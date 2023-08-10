import React, {useContext} from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'
import { useLocation } from "react-router-dom"

type Props = {
  // name: string;
  // funcName: string;
  // setFuncName: Function;
}

const VersionHistory = () => {

    const mockVersionData = [
      { version:1 ,alias: 'test1', arn: 'xxx:hellouniverse:test'},
      { version:2, alias: 'test2', arn: 'xxx:hellouniverse:test'},
      { version:3, alias: 'test3', arn: 'xxx:hellouniverse:test'},
      { version:4, alias: 'test4', arn: 'xxx:hellouniverse:test'},
      { version:5, alias: 'test5', arn: 'xxx:hellouniverse:test'},
    ]

    // const location = useLocation()
    // const data = location.state.name
    // console.log('this is data in versions ', data)


  // const context = useContext(FuncNameContext)
// console.log(name, funcName)

  return (
    <div>
                {/* TOP SECTION OF EVERY PAGE */}
        <div className="flex justify-between items-center bg-gray-300 h-24">
        {/* <LeftSideBar funcName={funcName} setFuncName={setFuncName} />     */}
        <LeftSideBar /> 
        <h1 className='font-extrabold text-4xl font-mono'> KOMODO </h1>
        <RightSideBar />  
        </div> 
        <div className="flex justify-center">

        <a
            href="/home"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
         
              Home
            </span>
          </a>
          <a
            href="/metrics"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
         
              Metrics
            </span>
          </a>
          <a
            href="/warming"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
        
              Warm Functions
            </span>
          </a>

          <a
            href="/logs"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              View Logs
            </span>
          </a>
        </div>
        
 {/*BODY DIV */}
 
<div className="flex justify-center border-4 border-green-300 h-screen w-full ">
   
  <div className="flex flex-col justify-between border-4 border-red-400 h-1/2 w-1/2">
    {mockVersionData.reverse().map((item) => (
      <div className="flex justify-between"> {/* Remove justify-between class */}
        <div></div> {/*HERE for SPACING ONLY*/}
        <button className='border-2 border-black '> 
          version {item.version}
        </button>
        <span className=""> {/* Add ml-auto class to align the span to the right */}
          alias {item.alias}
        </span>
      </div>
    ))}
  </div>











  
</div>






    </div>
  )
}

export default VersionHistory