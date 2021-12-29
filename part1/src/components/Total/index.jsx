import React from 'react'

const Total = (props) => {
  const { parts } =  props;
  return (
    <p>{parts.reduce((acc,part)=>{
        return acc+=part.exercises; 
    },0)}</p>
  )
}

export default Total;