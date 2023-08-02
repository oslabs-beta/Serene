import React from 'react'



type Props = {}

const Home = (props: Props) => {


  return (
    <div>

      <div className="">
        <div className="bg-blue-500">LeftSideBar</div>
        <div>KOMODO</div>
        <div className="rightSidebar">RightSideBar</div>
      </div>
      <div className="mainSection">MainSection</div>

    </div>
  )
}

export default Home