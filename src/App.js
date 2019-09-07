import React, { useState } from 'react';
import styled from 'styled-components';
import { getRandomArray } from './services/arrayHelpers';

// Components
import Navigation from './components/navigation/_Navigation';
import Visualizer from './components/sort/visualizer/_Visualizer';

// Custom hooks
import { useSortAlgorithm } from './hooks/useSortAlgorithm';
import { useInterval } from './hooks/useInterval';

const Content = styled.div`
  position: absolute;
  top: 100px;
`;

const App = () => {
  const [array, movingIndex, step] = useSortAlgorithm(getRandomArray);

  const [isRunning, setIsRunning] = useState(false);

  useInterval(step, isRunning ? 10 : null);

  console.log("navigation re-render");

  const startSort = () => {
    setIsRunning(true);
  }

  const stepSort = () => {
    setIsRunning(false);
    step();
  }

  console.log('app re-render');

  return (
    <div>
      <Navigation startSort={startSort} stepSort={stepSort} />
      <Content>
        <Visualizer array={array} movingIndex={movingIndex} />
      </Content>
    </div>
  )
}

export default App;
