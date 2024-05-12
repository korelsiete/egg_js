const container = document.getElementById("container");

const inputOnline = prompt("¿Está conectado el usuario?\nSI o NO", "SI");
const isOnline = inputOnline?.toUpperCase() === "SI" ? true : false;
const [nombre, edad, profesion, ubicacion, hobby] = [
  "Stefano",
  20,
  "Software Developer",
  "Lima",
  "Freestyle",
];

const template = `\n
Nombre: ${nombre}
Edad: ${edad}
Profesión: ${profesion}
Ubicación: ${ubicacion}
Hobby: ${hobby}`;

container.textContent = `Estado del usuario: ${
  isOnline ? "Activo" : "Inactivo"
}`;
isOnline && (container.textContent += template);
