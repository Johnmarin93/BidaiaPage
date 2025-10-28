document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const datos = new FormData(form);

  fetch("../enviar.php", {
    method: "POST",
    body: datos,
  })
    .then((response) => response.text())
    .then((data) => {
      const popup = document.getElementById("popup");
      const mensaje = document.getElementById("mensaje");

      if (data.includes("✅")) {
        mensaje.innerHTML =
          "<span style='color:green;'>✅ Mensaje enviado correctamente</span>";
      } else {
        mensaje.innerHTML =
          "<span style='color:red;'>❌ Error al enviar el mensaje</span>";
      }

      popup.style.display = "block"; // Muestra la ventana
      form.reset();
    })
    .catch(() => {
      const popup = document.getElementById("popup");
      const mensaje = document.getElementById("mensaje");

      mensaje.innerHTML =
        "<span style='color:red;'>❌ Error de conexión. Intenta más tarde.</span>";
      popup.style.display = "block";
    });
});

// Cerrar la ventana
document.getElementById("cerrar").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});
