document.addEventListener("DOMContentLoaded", function() {
  // مثال على إضافة تأثير تفاعلي عند التمرير
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', function() {
    sections.forEach(function(section) {
      if (window.scrollY + window.innerHeight > section.offsetTop + 100) {
        section.classList.add('visible');
      }
    });
  });
});
