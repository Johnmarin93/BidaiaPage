document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita recargar la página

  const formData = new FormData(e.target);
  const modalTexto = document.getElementById("modalTexto");
  const modal = new bootstrap.Modal(document.getElementById("modalMensaje"));

  try {
    const respuesta = await fetch("enviar.php", {
      method: "POST",
      body: formData,
    });
    const texto = await respuesta.text();

    if (texto.includes("✅")) {
      modalTexto.innerHTML = `<p class="text-success fs-5 mb-0">✅ Mensaje enviado correctamente</p>`;
    } else {
      modalTexto.innerHTML = `<p class="text-danger fs-5 mb-0">❌ Error al enviar el mensaje</p>`;
    }
  } catch (error) {
    modalTexto.innerHTML = `<p class="text-danger fs-5 mb-0">⚠️ Error de conexión con el servidor</p>`;
  }

  modal.show();
  e.target.reset(); // limpia el formulario
});
