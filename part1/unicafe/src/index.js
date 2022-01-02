/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Statistics from './components/Statistics';
import Button from './components/Button';

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const stats = { Good: good, Neutral: neutral, Bad: bad };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" handleClick={() => { setGood(good + 1); }} />
      <Button text="Neutral" handleClick={() => { setNeutral(neutral + 1); }} />
      <Button text="Bad" handleClick={() => { setBad(bad + 1); }} />
      <h1>Statistics</h1>
      <Statistics stats={stats} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
