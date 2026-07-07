// ---- Config: point this at your deployed backend once it's live ----
const API_BASE_URL = 'http://localhost:5000';

// ---- Typing animation for hero ----
const roles = ['Your Name', 'Full Stack Developer', 'Problem Solver'];
let roleIndex = 0, charIndex = 0, deleting = false;
const typedEl = document.getElementById('typed');

function typeLoop() {
  const current = roles[roleIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) { deleting = true; setTimeout(typeLoop, 1200); return; }
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  }
  setTimeout(typeLoop, deleting ? 50 : 90);
}
typeLoop();

// ---- Mobile nav toggle ----
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
});

// ---- Footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Contact form submission ----
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = 'Sending...';

  const payload = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim()
  };

  try {
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (res.ok) {
      statusEl.textContent = "Thanks — your message was sent!";
      form.reset();
    } else {
      statusEl.textContent = data.error || 'Something went wrong. Try again.';
    }
  } catch (err) {
    statusEl.textContent = 'Could not reach the server. Is the backend running?';
  }
});
