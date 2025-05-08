
import { useState } from 'react';

export default function Home() {
  const [history, setHistory] = useState([]);
  const [prediction, setPrediction] = useState(null);

  const sendResult = async (result) => {
    const res = await fetch('/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ result, history }),
    });
    const data = await res.json();
    setHistory([...history, result]);
    setPrediction(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AION BACCARAT</h1>
      <div>
        <button onClick={() => sendResult('p')}>Player (P)</button>
        <button onClick={() => sendResult('b')}>Banker (B)</button>
        <button onClick={() => sendResult('t')}>Tie (T)</button>
      </div>
      <pre>{JSON.stringify(prediction, null, 2)}</pre>
    </div>
  );
}
