/* eslint-disable react/prop-types */
import React from 'react';

function Part(props) {
  const { name, exercises } = props;
  return (
    <p key={`${name}`}>
      {name}
      {' '}
      {exercises}
    </p>
  );
}

export default Part;
