import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 4em;
`;

const StyledButton = styled.button`
  background: rgb(191, 191, 191);
  border-radius: 3px;
  border: 2px solid cyan;
  margin: 1em 1em;
  padding: 0.25em 1em;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: cyan;
  outline: none;
  cursor: pointer;
`;

const Navigation = ({startSort, stepSort}) => (
    <StyledNavigation>
      <StyledButton onClick={startSort} >Start</StyledButton>
      <StyledButton onClick={stepSort} >Step</StyledButton>
    </StyledNavigation>
)

export default Navigation;