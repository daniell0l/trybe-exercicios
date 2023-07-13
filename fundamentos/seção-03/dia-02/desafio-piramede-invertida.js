let n = 10;
let asterisco = '*';
let linhas = '';
let posicao = n - 1;

for (let i = 0; i < n; i++) {
  for (let i = 0; i < n; i++) {
    if (i < posicao) {
      linhas = linhas + ' ';
    } else {
      linhas = linhas + asterisco;
    }
  }
  console.log(linhas);
  linhas = '';
  posicao -= 1;
};