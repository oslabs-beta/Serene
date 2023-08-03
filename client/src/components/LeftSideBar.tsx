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
    <div>
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
        viewBox="0 -5 90 80"
        width="150"
        height="150"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )}

      <div //entire sidebar div // sidebar does not fully extend to the bottom, research 
        className={`flex flex-col items-center -left-2 -top-1 -mb-4  bg-gray-300  pl-10 pr-10 text-black fixed h-full z-40  ease-in-out duration-300 border-2 border-black ${
        showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
      <h3 className="mt-20 text-2xl min-w-min font-semibold text-white mb-5">F U N C T I O N S</h3>
        <div // function data table in sidebar
        className="border-8 border-black overflow-y-auto h-[75%] w-[110%]"
        > 
          {/* <div> */}
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

          {/* </div> */}
     
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar