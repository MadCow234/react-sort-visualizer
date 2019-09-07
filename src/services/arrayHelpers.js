export const getRandomArray = () => {
  const array = Array.from(new Array(Math.floor((Math.random() * 60) + 40)), () => Math.floor((Math.random() * 499) + 1));
  console.log(array);
  return array;
}

export const stepBubbleSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length - i; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
        return [array, j - 1, false];
      }
    }
  }
  return [array, -1, true];
}