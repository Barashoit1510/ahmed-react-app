// Counter.jsx
import { useState } from "react";

export function Tiriye() {
  let [count, setCount] = useState(0);

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
        style={{ backgroundColor: "green", color: "white" }}
      >
        Decrease
      </button>
    </div>
  );
}
