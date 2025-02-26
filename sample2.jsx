
// src/App.js

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Button Click Counter</h1>
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  );
}

export default App;
