import React, { useState } from 'react';

function App() {
  // Initialize the state with 0
  const [count, setCount] = useState(0);

  // Function to handle the button click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-4 max-w-sm mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">Button Counter</h1>
      <p className="mb-4">Button clicked {count} {count === 1 ? 'time' : 'times'}</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click Me
      </button>
    </div>
  );
}

export default App;

