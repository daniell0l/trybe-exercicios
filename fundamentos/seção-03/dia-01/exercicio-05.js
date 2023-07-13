let movimentos = "";
const peca = "bispo";

function obterMovimentosDaPeca(peca) {
  const pecaLowerCase = peca.toLowerCase();

  switch (pecaLowerCase) {
    case "peão":
      movimentos = "Movimenta-se para frente, captura na diagonal";
      break;
    case "torre":
      movimentos = "Movimenta-se em linha reta nas colunas e fileiras";
      break;
    case "cavalo":
      movimentos = "Movimenta-se em um padrão de L";
      break;
    case "bispo":
      movimentos = "Movimenta-se nas diagonais";
      break;
    case "rainha":
      movimentos = "Movimenta-se em linha reta nas colunas, fileiras e diagonais";
      break;
    case "rei":
      movimentos = "Movimenta-se em todas as direções por uma casa";
      break;
    default:
      return "Erro: Peça inválida.";
  }
  return movimentos;
}

const movimentosDaPeca = obterMovimentosDaPeca(peca);
console.log(movimentosDaPeca);
