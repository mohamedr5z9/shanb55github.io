document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', function() {
    sections.forEach(function(section) {
      if (window.scrollY + window.innerHeight > section.offsetTop + 100) {
        section.classList.add('visible');
      }
    });
  });
});

