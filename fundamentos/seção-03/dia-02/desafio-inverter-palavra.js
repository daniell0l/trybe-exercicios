const word = 'trybe'
let revertWord = ''

// primeira forma de resolver  
for (let i = word.length - 1; i >= 0; i--) {
  revertWord += word[i]
}

// segunda forma de resolver 
revertWord = word.split('').reverse().join('');

console.log(revertWord);