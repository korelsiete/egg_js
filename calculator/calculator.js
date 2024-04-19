class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b === 0) {
      return "Error: No se puede dividir por cero";
    }
    return a / b;
  }

  static squareRoot(a) {
    return Math.sqrt(a);
  }

  static cubeRoot(a) {
    return Math.cbrt(a);
  }

  static power(a, b) {
    return Math.pow(a, b);
  }
}

function startCalculator() {
  const operations = [
    { name: "sumar", method: Calculator.add, parameters: 2 },
    { name: "restar", method: Calculator.subtract, parameters: 2 },
    { name: "multiplicar", method: Calculator.multiply, parameters: 2 },
    { name: "dividir", method: Calculator.divide, parameters: 2 },
    { name: "raíz cuadrada", method: Calculator.squareRoot, parameters: 1 },
    { name: "raíz cubica", method: Calculator.cubeRoot, parameters: 1 },
    { name: "potencia", method: Calculator.power, parameters: 2 },
  ];

  let result;
  let messageInput = `Elige la operación según el número:`;
  operations.forEach(
    (operation, index) => (messageInput += `\n${index + 1} : ${operation.name}`)
  );

  const operationNumber = Number(prompt(messageInput)) - 1;

  if (!operations[operationNumber]) return alert("No existe esa operación");

  if (operations[operationNumber].parameters === 1) {
    const number = Number(prompt("Ingresa el número"));
    result = operations[operationNumber].method(number);
  } else {
    const number1 = Number(prompt("Ingresa el primer número"));
    const number2 = Number(prompt("Ingresa el segundo número"));
    result = operations[operationNumber].method(number1, number2);
  }

  alert("El resultado es: " + result);
}

startCalculator();
