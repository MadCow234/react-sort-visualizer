import React, { useCallback } from 'react';
import styled from 'styled-components';

// Components
import Column from './Column';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(191, 191, 191);
  transform: rotateX(180deg);
`;

const Visualizer = ({array, movingIndex}) => {
  console.log('visualizer re-render');

  const column = useCallback((value, index, movingIndex) => {
    return <Column key={index} height={value} index={index} color={index === movingIndex ? "darkgreen" : "cyan"} />;
  }, []);
        
  return (
    <Container>
      {array.map((value, index) => column(value, index, movingIndex))}
    </Container>
  )
}

export default Visualizer;