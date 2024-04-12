// la función Number convierte el valor a un número si es posible
const number1 = Number(prompt("Ingrese primer número"));
const number2 = Number(prompt("Ingrese segundo número"));

const sum = number1 + number2;
const messageSum = "El resultado de la suma es: " + sum;

alert(messageSum);

const average = sum / 2;
const triple = average * 3;
const resultMinusTen = triple - 10;
const finalMessage = `El promedio de la suma es: ${average}\nEl triple del promedio es: ${triple}\nEl triple del promedio menos 10 es: ${resultMinusTen}`;

alert(finalMessage);
