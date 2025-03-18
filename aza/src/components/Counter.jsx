import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Counter: {count}</h2>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
