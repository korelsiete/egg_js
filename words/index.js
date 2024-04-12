const phrase = prompt("Ingrese una palabra o frase");
// length cuenta el número de caracteres
const quantity = phrase.length;

const messageQuantity = `La palabra o frase tiene ${quantity} letras`;
alert(messageQuantity);

// toUpperCase y toLowerCase convierten el texto a mayúsculas y minúsculas
const upperCase = phrase.toUpperCase();
const lowerCase = phrase.toLowerCase();

const finalMessage = `La palabra o frase en mayúsculas: ${upperCase}\nLa palabra o frase en minúsculas: ${lowerCase}`;
alert(finalMessage);
