// ============================================
// FUTURISTIC PORTFOLIO — ADVANCED INTERACTIONS
// ============================================

// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Smooth Scroll & Close Menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    
    if (href === '#' || href.length <= 1) return;
    
    e.preventDefault();
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      
      // Close menu if open
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
      }
    }
  });
});

// Animated Scroll Effects & Reveal Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add animation delay for staggered effect
      entry.target.style.animation = `revealUp 0.8s ease forwards`;
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all major sections and cards
document.querySelectorAll('.hero-content, .hero-visual, .project-card, .skill-category, .highlight-card, .about-content, .about-grid, .experience-item').forEach(el => {
  observer.observe(el);
});

// Parallax Effect on Scroll (for background orbs)
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const orbs = document.querySelectorAll('.orb');
      
      orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
      
      ticking = false;
    });
    ticking = true;
  }
});

// Interactive Hover Effects on Cards
document.querySelectorAll('.project-card, .skill-category, .highlight-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'var(--transition)';
  });
});

// Form Validation & Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you'd typically send to a backend or email service
    console.log('Contact form data:', data);
    
    // Reset form
    contactForm.reset();
    alert('Thank you! I'll get back to you soon.');
  });
}

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').slice(1) === current) {
      item.classList.add('active');
    }
  });
}, {passive: true});

// Keyboard Navigation Enhancement
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  }
});

// Smooth initial load animations
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
