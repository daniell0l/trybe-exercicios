const inssRate1 = 0.08;
const inssRate2 = 0.09;
const inssRate3 = 0.11;
const inssMaxRate = 570.88;

const irRate1 = 0.075;
const irDeduction1 = 142.80;
const irRate2 = 0.15;
const irDeduction2 = 354.80;
const irRate3 = 0.225;
const irDeduction3 = 636.13;
const irMaxRate = 0.275;
const irMaxDeduction = 869.36;

let inssDiscount = 0;
let irDiscount = 0;

const grossSalary = 3000.00;

function calculateNetSalary(grossSalary) {
  if (grossSalary <= 1556.94) {
    inssDiscount = grossSalary * inssRate1;
  } else if (grossSalary <= 2594.92) {
    inssDiscount = grossSalary * inssRate2;
  } else if (grossSalary <= 5189.82) {
    inssDiscount = grossSalary * inssRate3;
  } else {
    inssDiscount = inssMaxRate;
  }

  const baseSalary = grossSalary - inssDiscount;

  if (baseSalary <= 1903.98) {
    irDiscount = 0;
  } else if (baseSalary <= 2826.65) {
    irDiscount = baseSalary * irRate1 - irDeduction1;
  } else if (baseSalary <= 3751.05) {
    irDiscount = baseSalary * irRate2 - irDeduction2;
  } else if (baseSalary <= 4664.68) {
    irDiscount = baseSalary * irRate3 - irDeduction3;
  } else {
    irDiscount = baseSalary * irMaxRate - irMaxDeduction;
  }

  const netSalary = baseSalary - irDiscount;

  return netSalary;
}

const netSalary = calculateNetSalary(grossSalary);
console.log(netSalary);
