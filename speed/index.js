const calcularVelocidad = (distancia, tiempo) => {
  const velocidad = distancia / tiempo;
  console.log("La velocidad del móvil es " + velocidad);
  return velocidad;
};

const velocidad1 = calcularVelocidad(100, 10);
const velocidad2 = calcularVelocidad(50, 20);
const velocidad3 = calcularVelocidad(80, 30);

console.log("La velocidad de Juana es " + velocidad1);
console.log("La velocidad de Martin es " + velocidad2);
console.log("La velocidad de Pedro es " + velocidad3);
