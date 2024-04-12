/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

/* muestra un alerta que pide una entrada de dato */
const namePrompt = globalThis.prompt("INGRESA TU NOMBRE:");
const message = `Bienvenido ${namePrompt}`;

/* muestra un alerta con el dato de entrada */
alert(message);
