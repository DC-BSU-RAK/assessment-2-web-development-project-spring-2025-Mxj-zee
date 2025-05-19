document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('feedback');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      feedback.textContent = "Thank you for reaching out! We'll get back to you soon.";
      form.reset();
    });
  });
  