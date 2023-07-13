const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("Array values:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of array values:", sum);

let mean = sum / numbers.length;
console.log("Arithmetic mean:", mean);

if (mean > 20) {
  console.log("The arithmetic mean is greater than 20");
} else {
  console.log("The arithmetic mean is less than or equal to 20");
}

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Largest value:", max);

let oddCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddCount++;
  }
}

if (oddCount > 0) {
  console.log("Number of odd values:", oddCount);
} else {
  console.log("No odd values found");
}
