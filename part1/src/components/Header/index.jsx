/* eslint-disable react/prop-types */
import React from 'react';

function Header(props) {
  const { course } = props;
  return (
    <h1>{course}</h1>
  );
}

export default Header;
