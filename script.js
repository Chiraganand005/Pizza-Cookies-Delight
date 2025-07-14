/* =============================
   script.js
   ============================= */
// Mobile Nav Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Intersection Observer for Reveal Animations
const reveals = document.querySelectorAll(".reveal");
const observerOptions = {
  threshold: 0.2,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

reveals.forEach((section) => {
  revealObserver.observe(section);
});

// Contact Form Submission (Demo Only)
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    contactForm.reset();
  });
}
