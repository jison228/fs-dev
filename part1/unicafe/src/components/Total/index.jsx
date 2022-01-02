/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React from 'react';

function Total(props) {
  const { parts } = props;
  return (
    <p>
      {parts.reduce((acc, part) => acc += part.exercises, 0)}
    </p>
  );
}

export default Total;
