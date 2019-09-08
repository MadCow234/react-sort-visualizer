import React, { useState } from 'react';
import styled from 'styled-components';
import { getRandomArray } from './services/arrayHelpers';

// Components
import Navigation from './components/navigation/_Navigation';
import Visualizer from './components/sort/visualizer/_Visualizer';
import Metrics from './components/sort/visualizer/Metrics';

// Custom hooks
import { useBubbleSort } from './hooks/useBubbleSort';
import { useInterval } from './hooks/useInterval';

const Content = styled.div`
  position: absolute;
  margin-top: 5em;
`;

const App = () => {
  const [stepBubbleSort, bubbleSortArray, compareIndexes, compareValues, numPasses, isSwapping, sortedIndex, isSorted] = useBubbleSort(getRandomArray);
  const [isRunning, setIsRunning] = useState(false);

  // console.log('app re-render');

  const startSort = () => {
    setIsRunning(true);
  }

  const stopSort = () => {
    setIsRunning(false);
  }

  const stepSort = () => {
    stopSort();
    stepBubbleSort();
  }

  useInterval(stepBubbleSort, (isRunning && !isSorted) ? 10 : null);

  return (
    <div>
      <Navigation startSort={startSort} stepSort={stepSort} stopSort={stopSort} />
      <Content>
        <Visualizer array={bubbleSortArray} compareIndexes={compareIndexes} sortedIndex={sortedIndex} />
        <Metrics arraySize={bubbleSortArray.length} compareIndexes={compareIndexes} compareValues={compareValues} numPasses={numPasses} isSwapping={isSwapping} />
      </Content>
    </div>
  )
}

export default App;
