import React from 'react'
import FunctionDetails from './FunctionDetails'

type Props = {

}

const Functions = (props: Props) => {



  return (
    
    <div>
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
  )
}

export default Functions