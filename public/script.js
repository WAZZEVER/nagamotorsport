document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        console.log('Form submitted:', formValues);
        
        // Show a success message (you can replace this with a modal or other UI element)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset the form
        contactForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});