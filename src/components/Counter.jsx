// Counter.jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: "green", color: "white" }}
      >
        Increase
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ backgroundColor: "orange", color: "white" }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
