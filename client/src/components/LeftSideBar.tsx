import React, { useState} from 'react'
import Functions from './Functions'
import FunctionDetails from './FunctionDetails'

type Props = {

}

const LeftSideBar = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  const mockFuncDetails = [
    {id: 1, name: 'lambdaFunc1', description:'something1', versHist: "version1", metric:"metric1", warmData: "warmingdata1"},
    {id: 2, name: 'lambdaFunc2', description:'something2', versHist: "version2", metric:"metric2", warmData: "warmingdata2"},
    {id: 3, name: 'lambdaFunc3', description:'something3', versHist: "version3", metric:"metric3", warmData: "warmingdata3"}
]

  return (
    <aside>


    
  {showSidebar ? (
    <button
      className="flex text-4xl text-black items-center cursor-pointer fixed left-8 top-6 z-50"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      x
    </button>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor"   
    onClick={() => setShowSidebar(!showSidebar)}
    className="fixed  z-40 flex items-center cursor-pointer left-4 top-2"
    viewBox="0 0 100 80"
    width="200"
    height="200"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
  )}


  {/* <div className="top-0 left-0 w-[35vw] bg-green-500  p-10 pl-20 text-white fixed h-full z-30">
    <h3 className="mt-20 text-4xl font-semibold text-white">Functions</h3>
  </div> */}

  <div //entire sidebar div
  className={`top-0 left-0 w-[25vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 border-8 border-yellow-500 ${
    showSidebar ? "translate-x-0 " : "-translate-x-full"
  }`}
>
  <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3>
  <div> 
    FUNCTIONS GO HERE
    { mockFuncDetails.map( (item) => (
            <FunctionDetails 
            detailID={item.id}
            name={item.name}
            description={item.description}
            versHist={item.versHist}
            metric={item.metric}
            warmData={item.warmData}
            />
        )
   )}
  </div>

    </div>
  </aside>


  )
}

export default LeftSideBar