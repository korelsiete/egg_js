// la función Number convierte el valor a un número si es posible
// const number1 = Number(prompt("Ingrese primer número"));
// const number2 = Number(prompt("Ingrese segundo número"));

// const sum = number1 + number2;
// const messageSum = "El resultado de la suma es: " + sum;

const amount = Number(prompt("¿Cuántos números desea sumar?"));
let sum = 0;

for (let index = 0; index < amount; index++) {
  const numberToSum = Number(prompt("Ingrese un número a sumar"));
  sum = sum + numberToSum;
}

alert(sum);

const average = sum / 2;
const triple = average * 3;
const resultMinusTen = triple - 10;
const finalMessage = `El promedio de la suma es: ${average}\nEl triple del promedio es: ${triple}\nEl triple del promedio menos 10 es: ${resultMinusTen}`;

alert(finalMessage);
