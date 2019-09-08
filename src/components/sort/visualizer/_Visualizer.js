import React, { useCallback } from 'react';
import styled from 'styled-components';

// Components
import Column from './Column';


const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background-color: rgb(191, 191, 191);
  height: auto;
  width: auto;
  transform: rotateX(180deg);
`;

const Visualizer = ({array, compareIndexes, sortedIndex}) => {
  // console.log('visualizer re-render');

  const column = useCallback((value, index, compareIndexes, sortedIndex) => {
    let color = "cyan";
    if (index === compareIndexes[0]) color = "palevioletred";
    if (index === compareIndexes[1]) color = "darkgreen"
    if (index >= sortedIndex) color = "palevioletred"
    return <Column key={index} height={value} index={index} color={color} />;
  }, []);
        
  return (
    <Container>
      {array.map((value, index) => column(value, index, compareIndexes, sortedIndex))}
    </Container>
  )
}

export default Visualizer;