import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSidebar'

type Props = {}

const VersionHistory = (props: Props) => {

    const mockVersionData = [
      { version:1, alias: 'test1', code: "console.log(test)"},
      { version:2, alias: 'test2', code: "console.log(test)"},
      { version:3, alias: 'test3', code: "console.log(test)"},
      { version:4, alias: 'test4', code: "console.log(test)"},
      { version:5, alias: 'test5', code: "console.log(test)"},
    ]

  return (
    <div>
                {/* TOP SECTION OF EVERY PAGE */}
        <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />    
        <h1 className='font-extrabold text-4xl font-mono'> KOMODO </h1>
        <RightSideBar />  
        </div> 

        VERSION HISTORY PAGE
 {/*BODY DIV */}
<div className="flex justify-center border-4 border-green-300 h-screen w-full ">
  <div className="flex flex-col justify-between border-4 border-red-400 h-1/2 w-1/2">
    {mockVersionData.map((item) => (
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