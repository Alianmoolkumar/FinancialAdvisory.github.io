document.addEventListener('DOMContentLoaded', function () {
    const consultationForm = document.getElementById('consultationForm');
    const consultationResult = document.getElementById('consultationResult');
  
    consultationForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Perform form validation
      const fullName = consultationForm.querySelector('#fullName').value.trim();
      const email = consultationForm.querySelector('#email').value.trim();
      const phone = consultationForm.querySelector('#phone').value.trim();
      const dateTime = consultationForm.querySelector('#dateTime').value.trim();
      const message = consultationForm.querySelector('#message').value.trim();
  
      if (fullName === '' || email === '' || phone === '' || dateTime === '') {
        alert('Please fill out all required fields.');
        return;
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // For demonstration purposes, show a success message
      consultationResult.innerHTML = `
        <p>Your free consultation has been booked!</p>
        <p>Details:</p>
        <ul>
          <li>Full Name: ${fullName}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>Preferred Date and Time: ${dateTime}</li>
          <li>Message: ${message}</li>
        </ul>
      `;
      consultationForm.reset();
    });
  });
  