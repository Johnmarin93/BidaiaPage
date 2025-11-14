/**********************************************
 *  NAVBAR: Cambiar estilo al hacer scroll
 **********************************************/
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

/**********************************************
 *  NAVBAR: Cerrar menú al hacer clic en un link
 **********************************************/
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Activar link y cerrar menú
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (
      navbarCollapse.classList.contains("show") &&
      !navbarCollapse.contains(e.target) &&
      !e.target.classList.contains("navbar-toggler")
    ) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  });
});

/**********************************************
 *  CARGAR CONTENIDO DINÁMICO
 **********************************************/
function cargar(pagina) {
  fetch(pagina)
    .then((respuesta) => respuesta.text())
    .then((datos) => {
      document.getElementById("contenido").innerHTML = datos;

      // Mostrar/ocultar comentarios solo en inicio
      const comentarios = document.getElementById("comentarios-clientes");
      if (pagina === "page/inicio.html") {
        comentarios.style.display = "block";
      } else {
        comentarios.style.display = "none";
      }

      // Subir arriba
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Cargar inicio automáticamente
cargar("page/inicio.html");

/**********************************************
 *  BOTÓN "BACK TO TOP"
 **********************************************/
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
