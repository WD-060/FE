import Candle from './components/Candle';
import './App.css';
import { useState, useEffect } from "react";

const App = () => {
  const [candleHeight, setCandleHeight] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setCandleHeight((prev) => {
        if(prev <= 10) return 90;
        return prev - 10;
      })
    }, 2000);

    return () => clearInterval(interval);
  });
  return <Candle candleHeight={candleHeight} />;
};

export default App;
