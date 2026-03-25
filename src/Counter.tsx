import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button id="counter" type="button" className="counter" onClick={() => setCount(count + 1)}>
      Count is {count}
    </button>
  );
}
