// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.achieve__item, .skill-card, .pcard, .tl-item, .edu-card, .contact-card, .section__eyebrow, .section__title, .section__lead'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(el => io.observe(el));

// Projects filter
(function projectFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.pcard');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });
})();

// Signature element: biometric login -> balance reveal loop
(function biometricLoop() {
  const stepAuth = document.getElementById('stepAuth');
  const stepBalance = document.getElementById('stepBalance');
  const scanRing = document.getElementById('scanRing');
  const scanLabel = document.getElementById('scanLabel');
  const scanPrint = document.querySelector('.scan__print');
  const lockIcon = document.getElementById('lockIcon');

  if (!stepAuth || !stepBalance) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resetAuth() {
    scanRing.classList.remove('is-scanning');
    scanPrint.classList.remove('is-verified');
    scanLabel.textContent = 'Touch sensor to sign in';
    lockIcon.textContent = '🔒';
    // force reflow so the ring can re-animate next cycle
    void scanRing.getBoundingClientRect();
  }

  function runCycle() {
    stepAuth.classList.add('is-active');
    stepBalance.classList.remove('is-active');
    resetAuth();

    if (prefersReducedMotion) {
      // Skip straight to balance, less motion
      setTimeout(() => {
        stepAuth.classList.remove('is-active');
        stepBalance.classList.add('is-active');
      }, 900);
      return;
    }

    setTimeout(() => {
      scanRing.classList.add('is-scanning');
      scanLabel.textContent = 'Scanning fingerprint…';
    }, 500);

    setTimeout(() => {
      scanPrint.classList.add('is-verified');
      scanLabel.textContent = 'Identity verified';
      lockIcon.textContent = '🔓';
    }, 2100);

    setTimeout(() => {
      stepAuth.classList.remove('is-active');
      stepBalance.classList.add('is-active');
    }, 2900);
  }

  runCycle();
  setInterval(runCycle, 7000);
})();
