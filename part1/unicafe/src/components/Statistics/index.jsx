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
      <table>
        <tbody>
          {Object.keys(stats).map((key) => (
            <tr key={`${key}`}>
              <td>{key}</td>
              <td>{stats[key]}</td>
            </tr>
          ))}
          <tr>
            <td>All</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>
              {stats.Good && stats.Bad ? (stats.Good - stats.Bad) / all : 0}
              %
            </td>
          </tr>
          <tr>
            <td>All</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{stats.Good && stats.Bad ? stats.Good / all : 0}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Statistics;
