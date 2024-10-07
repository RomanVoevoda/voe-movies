export const getArrayFromTwoNumbers = (num1: number, num2: number) => {
  const arr = [];

  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }

  return arr;
};
