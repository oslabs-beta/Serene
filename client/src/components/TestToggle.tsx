import React from 'react'
import Popup from 'reactjs-popup'
type Props = {}

const TestToggle = (props: Props) => {
  return (
    <div className='bg-gray-400 h-screen'>
    <Popup trigger={<button> Trigger, please</button>} position="right center">
    <div className='fixed w-2/3 h-2/3 flex items-center border-2 border-white m-5'>Popup content here !!
      fgvefiuefbefkjefekf
      fefuegfbeiufkbjefef<br/>
      <button className="border-2 border-black">fheufbfefe</button>
    </div>
  </Popup>
  </div>

  )
}

export default TestToggle