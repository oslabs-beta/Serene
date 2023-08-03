import React from 'react'
import FunctionDetails from './FunctionDetails'

type Props = {

}

const Functions = (props: Props) => {

    const mockFuncDetails = [
        {id: 1, name: 'lambdaFunc1', description:'something1', versHist: "version1", metric:"metric1", warmData: "warmingdata1"},
        {id: 2, name: 'lambdaFunc2', description:'something2', versHist: "version2", metric:"metric2", warmData: "warmingdata2"},
        {id: 3, name: 'lambdaFunc3', description:'something3', versHist: "version3", metric:"metric3", warmData: "warmingdata3"}
    ]

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