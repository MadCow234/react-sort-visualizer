import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: ${props => props.height + 'em'};
  background-color: red;
  border: 1px solid black;
  width: 0.5em;
`;

const Column = ({height}) => (
  <Container height={height} />
)

export default Column;