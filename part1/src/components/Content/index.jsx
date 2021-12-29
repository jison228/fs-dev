import React from 'react'
import Part from './Part';

const Content = (props) => {
  const { parts } =  props;
  return (
      <>
      {parts.map((part,i)=>{
         return <Part name={part.name} exercises={part.exercises} key={`${part.name}_${i}`} />
      })}
      </>
  )
}

export default Content;