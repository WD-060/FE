function Counter({ counter, setCounter }) {
    
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default Counter;
