import { useState } from 'react';

export const useBubbleSort = (commonArray) => {
  const [array, setArray] = useState(commonArray);
  const [isSorted, setIsSorted] = useState(false);
  const [numPasses, setNumPasses] = useState(0);
  const [index, setIndex] = useState(0);
  const [compareIndexes, setCompareIndexes] = useState(['N/A', 'N/A']);
  const [compareValues, setCompareValues] = useState(['N/A', 'N/A'])
  const [isSwapping, setIsSwapping] = useState(false);
  const [sortedIndex, setSortedIndex] = useState(array.length);

  const stepBubbleSort = () => {
    if (isSorted) return;

    for (index; index < sortedIndex;) {
      if (isSwapping) {
        // Swap the values so the largest is on the right
        let temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;

        setCompareIndexes([index + 1, index]);
        setCompareValues([array[index + 1], array[index]]);
        setIsSwapping(false);

      } else {
        setCompareIndexes([index, index + 1]);
        setCompareValues([array[index], array[index + 1]]);
      }

      // Check to see if we need to swap before we increment the index
      if (array[index] > array[index + 1]) {
        setIsSwapping(true);
        setArray(array);
        return;
      }

      // If we've completed a full pass of the array, set the index to 0
      // Otherwise, increment the index by 1
      let newIndex = (index >= (sortedIndex - 2)) ? 0 : index + 1;
      if (newIndex === 0) setNumPasses(numPasses + 1);
      if (newIndex === 0) setSortedIndex((array[index] >= array[index + 1]) ? index : index + 1);
      if (sortedIndex <= 1) setIsSorted(true);
      setIndex(newIndex);
      setArray(array);
      return;
    }
  }

  return [stepBubbleSort, array, compareIndexes, compareValues, numPasses, isSwapping, sortedIndex, isSorted];
}