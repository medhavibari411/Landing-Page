
AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting

    // Collect form data
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // Basic form validation (you can add more complex validation as needed)
    if (firstName && lastName && email && subject && message) {
        // Form is valid, show success message
        showAlert('success', 'Message sent successfully!');
        // Optionally, reset the form after submission
        document.getElementById('contactForm').reset();
    } else {
        // Form is not valid, show error message
        showAlert('error', 'Please fill in all fields.');
    }
}

function showAlert(type, message) {
    alert(`${type.toUpperCase()}: ${message}`);
}