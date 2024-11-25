// script.js

// Menu toggle untuk navbar
document.querySelector('#menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  
  // Smooth scrolling untuk navigasi
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  // Slider sederhana untuk testimoni (Auto-scroll)
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  let currentTestimonial = 0;
  
  function showNextTestimonial() {
    testimonialCards[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    testimonialCards[currentTestimonial].classList.add('active');
  }
  
  setInterval(showNextTestimonial, 5000);
  
  // Tooltip untuk ikon di footer
  const socialIcons = document.querySelectorAll('.footer .social-links a');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.innerText = icon.getAttribute('aria-label');
      icon.appendChild(tooltip);
    });
  
    icon.addEventListener('mouseout', () => {
      const tooltip = icon.querySelector('.tooltip');
      if (tooltip) icon.removeChild(tooltip);
    });
  });

  