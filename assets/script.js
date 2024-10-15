document.addEventListener('DOMContentLoaded', () => {
    // Gets reference to the contact form and circle container
    const contactForm = document.getElementById('contact-form');
    const circleContainer = document.querySelector('.circle-container');
    const sections = document.querySelectorAll('section'); // Selects all sections

    // An observer to fade in the circle container
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fades in container
                circleContainer.style.opacity = '1';
                circleContainer.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 }); // Triggers the observer when the threshold is reached (10% visibility)

    // Observes each section tracking its visibility
    sections.forEach(section => {
        observer.observe(section);
    });

    // An event listener for form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents default submission behavior

        // Gets values from the form fields
        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        // Checks if all fields are filled in
        if (!name || !email || !message) {
            alert('Please complete the form and try again.');
            return;
        }

        // Simulates a successful submission
        setTimeout(() => {
            alert('Thank You! Your message has been sent.');
            contactForm.reset(); // Reset the form fields
        }, 1000);
    });
});