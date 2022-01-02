/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content';
import Display from './components/Display';
import Header from './components/Header';
import Total from './components/Total';
import Button from './components/Button';

function Hello({ name, age }) {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>{`Hello ${name}, you are ${age} years old`}</p>
      <p>{`So you were probably born in ${bornYear()}`}</p>
    </div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  const name = 'Peter';
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={decreaseByOne} text="minus" />
      <Button handleClick={setToZero} text="zero" />

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
