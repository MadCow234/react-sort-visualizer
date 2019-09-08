import React from 'react';
import styled from 'styled-components';

const StyledMetrics = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 400px;
  height: 300px;
  border: 1px solid red;
`;

const Metrics = ({arraySize, numPasses, compareIndexes, compareValues, isSwapping}) => (
  <StyledMetrics>
    <h2>Size: {arraySize}</h2>
    <h2>Passes: {numPasses}</h2>
    { isSwapping ? (
        <h2>Swapping values!</h2>
      ) : (
        <div>
          <h2>Comparing: {compareIndexes[0]} and {compareIndexes[1]}</h2>
          <h2>Comparing: {compareValues[0]} and {compareValues[1]}</h2>
        </div>
      )
    }
  </StyledMetrics>
)

export default Metrics;