document.getElementById('hamburger').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
  });
  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.galeria-img');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1
    });
  
    images.forEach(img => observer.observe(img));
  });