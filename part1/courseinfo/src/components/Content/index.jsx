/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Part from './Part';

function Content(props) {
  const { parts } = props;
  return (
    <>
      {parts.map((part, i) => <Part name={part.name} exercises={part.exercises} key={`${part.name}_${i}`} />)}
    </>
  );
}

export default Content;
