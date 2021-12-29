import React from 'react'

const Part = (props) => {
  const { name, exercises } =  props;
  return ( <p key={`${name}`}>{name} {exercises}</p>
  )
}

export default Part;