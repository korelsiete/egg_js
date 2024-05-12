const inputOnline = prompt("¿Está conectado el usuario?\nSI o NO", "SI");
const isOnline = inputOnline?.toUpperCase() === "SI" ? true : false;
const [nombre, edad, profesion, ubicacion, hobby] = [
  "Stefano",
  20,
  "Software Developer",
  "Lima",
  "Freestyle",
];

function insertTemplate(element = "datos3") {
  const container = document.getElementById(element);

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
}

insertTemplate("datos1");
