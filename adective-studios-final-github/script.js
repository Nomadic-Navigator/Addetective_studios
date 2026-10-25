const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const counters = document.querySelectorAll('[data-count]');
const prefersLessMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function runCounter(counter) {
  const target = Number(counter.dataset.count);
  const valueNode = [...counter.childNodes].find(node => node.nodeType === Node.TEXT_NODE);
  if (!valueNode) return;
  const format = value => new Intl.NumberFormat('en-IN').format(value);
  if (prefersLessMotion) { valueNode.textContent = format(target); return; }
  const duration = 1500;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    valueNode.textContent = format(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.45 });
  counters.forEach(counter => counterObserver.observe(counter));
} else {
  counters.forEach(runCounter);
}
