/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

function Statistics({ stats }) {
  const all = Object.values(stats).reduce((acc, stat) => acc += stat, 0);

  if (stats && all === 0) {
    return <p>No feedback given.</p>;
  }
  return (
    <div>
      {Object.keys(stats).map((key) => (
        <p key={`${key}_keyStat_${stats[key]}`}>{`${key}:${stats[key]}`}</p>
      ))}
      <p>{`All:${all}`}</p>
      <p>{`Average:${stats.Good && stats.Bad ? (stats.Good - stats.Bad) / all : 0}`}</p>
      <p>{`Positive:${stats.Good && stats.Bad ? stats.Good / all : 0} %`}</p>
    </div>
  );
}

export default Statistics;
