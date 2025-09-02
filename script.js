// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form (demo alert)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you for your message, Naveenkumar will get back to you soon!");
  e.target.reset();
});