const num1 = 3;
const num2 = 7;
const num3 = 10;

function checkAtLessOnePair(num1, num2, num3) {
  if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const result = checkAtLessOnePair(num1, num2, num3);
console.log(result);
