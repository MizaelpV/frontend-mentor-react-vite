import { useState, useEffect } from 'react';
import dataJson from './data/data.json';
import { CardBalance } from './components/CardBalance';
import { CardChart } from './components/CardChart';

function App() {
  const [highest, setHighest] = useState<number>();
  const [average, setAverage] = useState<number>();

  const getHighest = () => {
    const amounts = dataJson.map(({ amount }) => amount);
    const highestAmount = Math.max(...amounts);
    setHighest(highestAmount);
  };

  useEffect(() => {
    getHighest();
    getAverage();
  }, []);

  const getAverage = () => {
    const averageAmount =
      dataJson
        .map(({ amount }) => amount)
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0) / dataJson.length;

    return setAverage(Number(averageAmount.toFixed(2)));
  };

  return (
    <main className="flex flex-col font-dm gap-6 text-white justify-center h-screen items-center">
      <CardBalance average={average} />
      <CardChart highest={highest} />
    </main>
  );
}

export default App;
