// script.js

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animaciones al hacer scroll (fadeIn)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  // Validación de formulario de contacto
  const contactoForm = document.getElementById("form-contacto");
  if (contactoForm) {
    contactoForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !email || !mensaje) {
        alert("Por favor completa todos los campos.");
        return;
      }

      // Simula envío exitoso
      alert("¡Gracias por tu mensaje, " + nombre + "! Me pondré en contacto pronto.");
      contactoForm.reset();
    });
  }
});