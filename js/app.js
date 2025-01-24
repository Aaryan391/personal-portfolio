// Initialize Models
const projectModel = new ProjectModel();
const skillModel = new SkillModel();

// Initialize Views
const projectView = new ProjectView();
const skillView = new SkillView();

// Initialize Controllers
const projectController = new ProjectController(projectModel, projectView);
const skillController = new SkillController(skillModel, skillView);

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    // Initialize controllers
    projectController.initialize();
    skillController.initialize();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formData);
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});