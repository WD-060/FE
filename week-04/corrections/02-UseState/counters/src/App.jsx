import {useState} from "react";
import './App.css';
import Counter from "./components/Counter";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <>
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
      <Counter count={count3} setCount={setCount3} />
    </>
  )
}

export default App
