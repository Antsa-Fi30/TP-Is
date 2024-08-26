import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { euler } from '../../utils/eulerAlgo';

const Euler = () => {
  const t0 = 0;
  const P0 = 0;
  const n = 5;
  const a = 0;
  const b = 1;

  const recrutement = t => 5;
  const depart = t => 3;

  const resultats = euler(t0, P0, a, b, n, recrutement, depart);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={resultats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="t" label={{ value: 'Time', position: 'insideBottomRight', offset: 0 }} />
        <YAxis label={{ value: 'Personnel', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="w" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Euler;
