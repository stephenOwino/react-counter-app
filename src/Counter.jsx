//..........
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Reset = () => {
    setCount(0);
  };
  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="components">
      <p className="count-displayed">{count}</p>
      <button className="counter-button" onClick={Increment}>
        Increment
      </button>
      <button className="counter-button" onClick={Reset}>
        Reset
      </button>
      <button className="counter-button" onClick={Decrement}>
        Decrement
      </button>
    </div>
  );
};
export default Counter;
