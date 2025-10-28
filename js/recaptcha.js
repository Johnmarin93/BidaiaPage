// Captcha invisible: el campo "trap" debe quedar vacío
document.getElementById("form").addEventListener("submit", function (e) {
  const trap = document.getElementById("trap").value;
  if (trap !== "") {
    e.preventDefault();
    alert("Bot detectado 🚫");
    return;
  }

  // Validación adicional: pequeño retardo antes del envío
  const start = performance.now();
  setTimeout(() => {
    const duration = performance.now() - start;
    if (duration < 200) {
      // Si el formulario se envía demasiado rápido, parece un bot
      e.preventDefault();
      alert("Actividad sospechosa detectada ⚠️");
    } else {
      alert("✅ Formulario enviado correctamente");
      // Aquí puedes enviar el formulario (ej. FormSubmit, EmailJS, etc.)
    }
  }, 200);
});
