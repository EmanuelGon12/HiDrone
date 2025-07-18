// Selecciona todos los puntos
const puntos = document.querySelectorAll('.punto');

const observerOptions = {
  threshold: 0.1 // Cuando el 10% del elemento esté visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Deja de observar después de que se vea
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observa cada punto
puntos.forEach(punto => {
  observer.observe(punto);
});

// Toggle principal
const toggleBtn = document.getElementById('toggleButton');
const nav = document.getElementById('nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Toggle submenú en móvil
const serviciosBtn = document.getElementById('serviciosBtn');

document.getElementById('serviciosBtn').addEventListener('click', (e) => {
  e.preventDefault();
  e.target.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.animado');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Opcional: dejar de observar una vez visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // activar cuando el 10% del objeto esté visible
  });

  elementos.forEach(el => {
    observer.observe(el);
  });
});



//Carrusel
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  slides.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// Opcional: ajustar tamaño en redimensionamientos
window.addEventListener('resize', updateCarousel);

// Iniciar
updateCarousel();




