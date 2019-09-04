import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: ${props => props.height + 'px'};
  background-color: ${props => props.index === props.movingIndex ? "darkgreen" : "cyan"};
  border: 1px solid black;
  width: 6px;
`;

const Column = ({height, index, movingIndex}) => {
  return (
    <Container height={height} index={index} movingIndex={movingIndex} />
  )
}

export default Column;