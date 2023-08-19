import React from 'react'

type Props = {}

const AnimatedBackground = (props: Props) => {
  return (

        <div className="relative bg-repeat bg-scrolling-reverse bg-scrolling-reverse-tailwind h-screen">
          <div className="absolute inset-0 bg-repeat bg-scrolling bg-scrolling-tailwind animate-bg-scrolling-reverse-tailwind"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-9xl font-extralight">TESTING</h1>
          </div>
        </div>
      );
    
}

export default AnimatedBackground