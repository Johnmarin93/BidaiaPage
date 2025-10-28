document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que recargue la página

  const form = e.target;
  const datos = new FormData(form);

  fetch("../enviar.php", {
    // <- sube un nivel para llegar al archivo PHP
    method: "POST",
    body: datos,
  })
    .then((response) => response.text())
    .then((data) => {
      const resultado = document.getElementById("resultado");
      resultado.style.display = "block";
      resultado.innerHTML = data.includes("✅")
        ? "<span style='color:green;'>✅ Mensaje enviado correctamente</span>"
        : "<span style='color:red;'>❌ Error al enviar el mensaje</span>";
      form.reset(); // Limpia el formulario
    })
    .catch(() => {
      document.getElementById("resultado").innerHTML =
        "<span style='color:red;'>❌ Error de conexión. Intenta más tarde.</span>";
    });
});
