/* ============================================================
   script.js — Dentalis stomatološka ordinacija
   ============================================================ */

/* --- Navbar scroll efekt + scroll-to-top gumb --- */
const navbar     = document.getElementById('navbar');
const scrollTop  = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  scrollTop.classList.toggle('visible', window.scrollY > 400);
});

scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* --- Mobilni izbornik --- */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* --- Označi današnji dan u radnom vremenu --- */
const todayIndex = new Date().getDay(); // 0=Ned, 1=Pon, ..., 6=Sub
document.querySelectorAll('.hours-row').forEach(row => {
  if (parseInt(row.dataset.day) === todayIndex) {
    row.classList.add('today');
  }
});

/* --- Galerija lightbox --- */
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* --- Toast notifikacije --- */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 4500);
}

/* --- Kontakt forma --- */
const contactForm = document.getElementById('contact-form');
const submitBtn   = document.getElementById('submit-btn');

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    if (!document.getElementById('gdpr').checked) {
      showToast('Molimo prihvatite uvjete obrade osobnih podataka.', 'error');
      return;
    }

    /* Provjeri je li Formspree konfiguriran */
    if (contactForm.action.includes('ZAMIJENI_S_TVOJIM_KODOM')) {
      /* Fallback: otvori mailto link ako Formspree nije postavljen */
      const name    = document.getElementById('cf-name').value;
      const email   = document.getElementById('cf-email').value;
      const phone   = document.getElementById('cf-phone').value;
      const message = document.getElementById('cf-message').value;
      const body    = `Ime: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\nPoruka:\n${message}`;
      window.location.href = `mailto:info@dentalis.hr?subject=Upit s web stranice — ${name}&body=${encodeURIComponent(body)}`;
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Slanje…';

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        showToast('Hvala! Javit ćemo vam se u najkraćem roku.');
        contactForm.reset();
      } else {
        showToast('Greška pri slanju. Molimo kontaktirajte nas telefonom.', 'error');
      }
    } catch {
      showToast('Greška pri slanju. Molimo kontaktirajte nas telefonom.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Pošalji upit';
    }
  });
}

/* --- Scroll reveal animacije --- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* --- Godina u footeru --- */
document.getElementById('year').textContent = new Date().getFullYear();

/* --- Cookie banner --- */
const cookieBanner  = document.getElementById('cookie-banner');
const cookieAccept  = document.getElementById('cookie-accept');
const cookieReject  = document.getElementById('cookie-reject');

if (!localStorage.getItem('cookie-consent')) {
  setTimeout(() => cookieBanner.classList.add('show'), 1800);
}

function dismissCookie(value) {
  localStorage.setItem('cookie-consent', value);
  cookieBanner.classList.remove('show');
}

cookieAccept.addEventListener('click', () => dismissCookie('all'));
cookieReject.addEventListener('click', () => dismissCookie('essential'));

/* ============================================================
   PRELOADER
   ============================================================ */
const hidePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (preloader && !preloader.classList.contains('hide')) {
    preloader.classList.add('hide');
  }
};
// Sakrij preloader čim je DOM spreman, ne čekaj video/slike
document.addEventListener('DOMContentLoaded', () => setTimeout(hidePreloader, 700));
// Sigurnosni fallback — makni preloader nakon max 3s bez obzira na resurse
setTimeout(hidePreloader, 3000);

/* ============================================================
   CUSTOM CURSOR  (samo pointer uređaji — miš)
   ============================================================ */
(function initCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  /* Ring prati s laggom za premium feel */
  (function loop() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  document.addEventListener('mouseleave', () => document.body.classList.add('cursor-hidden'));
  document.addEventListener('mouseenter', () => document.body.classList.remove('cursor-hidden'));

  /* Hover efekt — proširi ring na linkovima i gumbima */
  document.body.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .gallery-item, .service-card, [role="button"]'))
      document.body.classList.add('cursor-hover');
  });
  document.body.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .gallery-item, .service-card, [role="button"]'))
      document.body.classList.remove('cursor-hover');
  });
})();

/* ============================================================
   ANIMIRANI BROJAČI
   ============================================================ */
function runCounter(el) {
  const target   = parseFloat(el.dataset.target);
  const suffix   = el.dataset.suffix || '';
  const decimals = target % 1 !== 0 ? 1 : 0;
  const duration = 1800;
  const start    = performance.now();

  el.classList.add('counting');
  (function update(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = (eased * target).toFixed(decimals);
    el.textContent = Number(val).toLocaleString('hr') + suffix;
    if (p < 1) requestAnimationFrame(update);
    else el.classList.remove('counting');
  })(start);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = '1';
      runCounter(entry.target);
      counterObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

/* ============================================================
   HERO PARALLAX
   ============================================================ */
(function initParallax() {
  const vid = document.querySelector('#hero video');
  if (!vid) return;
  const h = () => {
    const s = window.scrollY;
    if (s < window.innerHeight * 1.2)
      vid.style.transform = `translateY(${s * 0.28}px)`;
  };
  window.addEventListener('scroll', h, { passive: true });
})();

/* ============================================================
   AKTIVNI NAV LINK (označava sekciju u kojoj se nalazi)
   ============================================================ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const anchors  = document.querySelectorAll('.nav-links a');
  if (!anchors.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        anchors.forEach(a => a.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-38% 0px -58% 0px' });

  sections.forEach(s => obs.observe(s));
})();

/* ============================================================
   STAGGERED GRID ANIMACIJE
   ============================================================ */
const staggerObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      staggerObs.unobserve(e.target);
    }
  });
}, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.stagger').forEach(el => staggerObs.observe(el));

/* ============================================================
   THEME SWITCHER
   ============================================================ */
(function initThemeSwitcher() {
  const root    = document.documentElement;
  const buttons = document.querySelectorAll('.theme-btn[data-theme]');

  /* Označi aktivni gumb prema trenutnoj temi */
  function syncButtons(id) {
    buttons.forEach(b => b.classList.toggle('active', b.dataset.theme === id));
  }

  /* Primijeni temu */
  function applyTheme(id) {
    root.setAttribute('data-theme', id);
    localStorage.setItem('dentalis-theme', id);
    syncButtons(id);
  }

  /* Init — postavi aktivni gumb */
  syncButtons(root.getAttribute('data-theme') || '1');

  /* Klik na gumb */
  buttons.forEach(btn => {
    btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
  });
})();
