import React from 'react';
import styled from 'styled-components';

// Components
import Column from './Column';

const Container = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  background-color: #eee;
  transform: rotate(180deg);
  height: auto;
  width: auto;
  border: 1px solid black;
`;

const Grid = ({grid}) => (
  <Container>
    {grid.map((value, index) => <Column key={index} height={value} />)}
  </Container>
)

export default Grid;