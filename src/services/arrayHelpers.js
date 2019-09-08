export const getRandomArray = () => {
  const array = Array.from(new Array(Math.floor((Math.random() * 60) + 40)), () => Math.floor((Math.random() * 399) + 1));
  console.log(array);
  return array;
}