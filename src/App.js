import React, { useState } from 'react';

// Components
import Stage from './components/visualizer/Stage';

const App = () => {
  let array = Array.from(new Array(Math.floor((Math.random() * 100) + 40)), () => Math.floor((Math.random() * 500) + 1));

  const [grid, setGrid] = useState(array);

  return (
    <Stage grid={grid} setGrid={setGrid} />
  )
}

export default App;



/* 

Sorting arrays of integers using different algorithms
The index of the array will correspond to a column in a grid
Each integer in the array will correspond to the length of a column


*/