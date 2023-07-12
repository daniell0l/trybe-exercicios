const angulo1 = 60;
const angulo2 = 70;
const angulo3 = 50;

function verificarTriangulo(angulo1, angulo2, angulo3) {
  if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
    return "Erro: Os ângulos devem ter valores positivos.";
  } else if (angulo1 + angulo2 + angulo3 === 180) {
    return true;
  } else {
    return false;
  }
}

const trianguloValido = verificarTriangulo(angulo1, angulo2, angulo3);
console.log(trianguloValido);
