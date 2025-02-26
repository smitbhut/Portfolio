// Mobile Navigation Toggle
const hamburgerIcon = document.getElementById('hamburger-icon');
const navList = document.getElementById('nav-list');

// Toggle the navigation menu when the hamburger icon is clicked
hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('lg:hidden');
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('#nav-list a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1); // Get the target section id
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for fixed header height
            behavior: 'smooth'
        });
    });
});

// Optional: Contact Form Validation (Simple Example)
const contactForm = document.querySelector('form');
const contactButton = document.querySelector('form button');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation: check if name, email, and message are filled
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');
    
    if (!name.value || !email.value || !message.value) {
        alert('Please fill out all fields!');
        return;
    }

    // Assuming the form is valid, you can submit the form or handle it here
    alert('Form submitted successfully!');
    contactForm.reset(); // Reset form after successful submission
});

// To handle the display of the mobile menu, we toggle the 'lg:hidden' class for responsive behavior