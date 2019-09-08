import React from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div`
  height: ${props => props.height + 'px'};
  background-color: ${props => props.color};
  border: 1px solid black;
  width: 6px;
`;

const Column = ({height, index, color}) => (
  <StyledColumn height={height} index={index} color={color}>
    {/* {console.log('column re-render')} */}
  </StyledColumn>
)

export default React.memo(Column);