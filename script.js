
// Theme toggle
document.getElementById('themeToggle').onclick = () => {
  const t = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', t === 'dark' ? 'light' : 'dark');
};

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal, .tl-item').forEach(el => obs.observe(el));

// Skill bars
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach(b => { b.style.width = b.dataset.w + '%'; });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skills-bars').forEach(el => barObs.observe(el));

// Contribution grid
const g = document.getElementById('cGrid');
for (let i = 0; i < 364; i++) {
  const d = document.createElement('div'); d.className = 'cc';
  const r = Math.random();
  if (r > 0.88) d.classList.add('c4');
  else if (r > 0.74) d.classList.add('c3');
  else if (r > 0.56) d.classList.add('c2');
  else if (r > 0.38) d.classList.add('c1');
  g.appendChild(d);
}

// Form send
function sendMsg(btn) {
  btn.textContent = "✅ Sent! I'll be in touch soon.";
  btn.style.background = 'linear-gradient(135deg,#16a34a,#22c55e)';
  setTimeout(() => { btn.textContent = 'Send Message 🚀'; btn.style.background = ''; }, 3500);
}
