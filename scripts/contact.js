document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Perform form validation here
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const message = contactForm.querySelector('#message').value.trim();
  
      if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
      }
  
      // For demonstration purposes, show a success message
      successMessage.textContent = 'Your message has been sent!';
      contactForm.reset();
    });
  });
  