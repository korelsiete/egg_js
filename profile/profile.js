const container = document.getElementById("container");

const [nombre, edad, profesion, ubicacion, hobby] = [
  "Stefano",
  20,
  "Software developer",
  "Lima",
  "Freestyle",
];

const template = `Nombre: ${nombre}
Edad: ${edad}
Profesión: ${profesion}
Ubicación: ${ubicacion}
Hobby: ${hobby}`;

container.textContent = template;
