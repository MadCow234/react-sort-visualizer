import { useState } from 'react';
import { stepBubbleSort } from '../services/arrayHelpers';

export const useSortAlgorithm = (array) => {
  const [stage, setStage] = useState(array);
  const [movingIndex, setMovingIndex] = useState(null);

  const stepSort = () => {
    const [array, index] = stepBubbleSort(stage);
    setStage(array);
    setMovingIndex(index);
  }

  return [stage, movingIndex, stepSort]
}