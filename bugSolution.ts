function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct
const result2 = subtract(10, 4); // Correct

//Corrected
const result3 = add(5, parseInt('3'));
const result4 = subtract(10, parseInt('4'));