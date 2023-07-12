const num1 = 500;
const num2 = 20
const num3 = 150
let message = ''

if ( num1 > num2 && num1 > num3) {
  message = 'O numero 1 é o maior numero!'
} else if (num2 > num1 && num2 > num3) {
  message = 'O numero 2 é o maior numero!'
} else {
  message = 'O numero 3 é o maior.'
}

console.log(message);