const perfil = document.getElementById("perfil");

const misDatosFisicos = {
  nombre: "Stefano",
  edad: 20,
  direccion: {
    calle: "Los Álamos",
    numero: "365",
    ciudad: "Lima",
  },
  altura: 177,
  peso: 80,
  hobby: "Freestyle",
};
const contenidoPerfil = `<h1>${misDatosFisicos.nombre}</h1>
<p>Edad: ${misDatosFisicos.edad}</p>
<p>Dirección: ${misDatosFisicos.direccion?.calle} ${
  misDatosFisicos.direccion?.numero
} ${misDatosFisicos.direccion?.ciudad}</p>
<p>Altura: ${misDatosFisicos.altura / 100.0} cm</p>
<p>Peso: ${misDatosFisicos.peso} kg</p>
<p>${misDatosFisicos.hobby}</p>`;

perfil.innerHTML = contenidoPerfil;
