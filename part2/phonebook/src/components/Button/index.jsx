/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({ handleClick, type, text }) {
  return (
    <button onClick={handleClick} type={type || 'submit'}>
      {text}
    </button>
  );
}

export default Button;
