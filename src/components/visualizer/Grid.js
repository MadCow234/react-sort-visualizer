import React from 'react';
import styled from 'styled-components';

// Components
import Column from './Column';

const Container = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  background-color: rgb(191, 191, 191);
  transform: rotateY(180deg);
  transform: rotateX(180deg);
  height: auto;
  width: auto;
  border: 1px solid black;
`;

const Grid = ({grid, movingIndex}) => (
  <Container>
    {grid.map((value, index) => <Column key={index} height={value} index={index} movingIndex={movingIndex} />)}
  </Container>
)

export default Grid;