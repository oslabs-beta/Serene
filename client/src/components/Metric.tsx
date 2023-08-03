import React from 'react'

type Props = {
    metric: string;
}

const Metric = ({metric}: Props) => {
  return (
    <div>Metric

<button className="border-4 border-black">Metric is {metric}</button><br/> 

    </div>
  )
}

export default Metric