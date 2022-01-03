/* eslint-disable prefer-spread */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App({ anecdotes }) {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});
  const max = Math.max.apply(Math, Object.values(votes));
  let maxElem = null;
  if (Object.values(votes).length > 0) {
    maxElem = Object.keys(votes)[Object.values(votes).findIndex((el) => el === max)];
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button
        text="Vote"
        handleClick={() => {
          setVotes((prevState) => {
            const prevStatecopy = { ...prevState };
            if (prevStatecopy[selected]) {
              prevStatecopy[selected] += 1;
            } else {
              prevStatecopy[selected] = 1;
            }
            return prevStatecopy;
          });
        }}
      />
      <Button text="Next Anecdote" handleClick={() => { setSelected(randomIntFromInterval(0, anecdotes.length - 1)); }} />
      <h1>Anecdote with most votes</h1>
      <p>{Object.values(anecdotes)[maxElem] ? Object.values(anecdotes)[maxElem] : ''}</p>
    </div>
  );
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root'),
);
