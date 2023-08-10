import React, { useState, useEffect} from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'
import {FetchLogs} from '../shared'
// import {FuncNameContext} from './FunctionDetails'

type Props = {
}



const Warming = ({}: Props) => {
  // const [allLogs, setAllLogs] = useState([])
    // const [funcName, setFuncName] = useContext(FuncNameContext)


    // console.log('im in warming ' + funcName)

  // useEffect(() => {
  //   // console.log('beginning to fetch')
  //   FetchLogs().then( funcLogs => {
  //     // console.log('setting data now')
  //     setAllLogs(funcLogs)
  //     console.log('logs are: ', funcLogs)
  //   })
  //   //data logic here
  //   }, [])



  return (
    <div>
        {/* TOP SECTION OF EVERY PAGE */}
        <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />    
        <h1 className='font-extrabold text-4xl font-mono'> KOMODO </h1>
        <RightSideBar />  
        </div> 
        <div className="flex justify-center">
      <a
            href="/home"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
         
              Home
            </span>
          </a>
<a
            href="/versions"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
         
              Version History
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
            href="/logs"
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
        
              Logs
            </span>
          </a>


        </div>
        <div>
  <img
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F9273%2Ff%2F2017%2F033%2F4%2Fc%2Fkeeping_warm_by_uradoodlelover2-daxms1b.gif&f=1&nofb=1&ipt=e67139040496533bfaa51a492b4a43800ca0e49dcb328d46986ba905def36c02&ipo=images"
    alt="warming"
  />
</div>

    

        
    </div>
  )
}

export default Warming