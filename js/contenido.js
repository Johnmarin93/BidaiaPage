function cargar(pagina) {
  fetch(pagina)
    .then((respuesta) => respuesta.text())
    .then((datos) => {
      document.getElementById("contenido").innerHTML = datos;

      // Mostrar u ocultar los comentarios solo en la página de inicio
      const comentarios = document.getElementById("comentarios-clientes");
      if (pagina === "page/inicio.html") {
        comentarios.style.display = "block";
      } else {
        comentarios.style.display = "none";
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth", // movimiento suave
      });
    });
}

// Cargar inicio al abrir la página
cargar("page/inicio.html");
