// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.appointment-form');
  
    if (!form) return;
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get values from form fields
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const service = form.querySelector('#service').value;
      const message = form.querySelector('#message').value.trim();
  
      // Basic empty validation
      if (!name || !email || !service || !message) {
        alert('Please fill out all fields before submitting.');
        return;
      }
  
      // Simple email pattern validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Success message
      alert(`Thank you, ${name}! Your appointment request for "${service.replace(/-/g, ' ')}" has been received.`);
  
      // Reset the form
      form.reset();
    });
  });
  