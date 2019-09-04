import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Grid from './Grid';

import { useInterval } from '../../hooks/useInterval';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: auto;
  width: auto;
  margin: auto;
`;

const StepButton = styled.button`
  box-sizing: border-box;
  height: 2em;
  width: 4em;
`;

const Stage = ({grid, setGrid}) => {
  const [delay, setDelay] = useState(10);
  const [movingIndex, setMovingIndex] = useState(null);
  
  const doStep = () => {
    for (let i = 0; i < grid.length - 1; i++) {
      for (let j = 0; j < grid.length - i - 1; j++) {
        if (grid[j] > grid[j + 1]) {
          let temp = grid[j];
          grid[j] = grid[j + 1];
          grid[j + 1] = temp;
          setGrid([...grid]);
          setMovingIndex(j);
          return;
        }
      }
    }
    setMovingIndex(-1);
    setDelay(null);
  }

  useInterval(doStep, delay);
        
  return (
    <Container>
      <Grid grid={grid} movingIndex={movingIndex} />
    </Container>
  )
}

export default Stage;