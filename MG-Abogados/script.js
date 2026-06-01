/* MG Abogados & Asociados — script.js */

const WHATSAPP_NUMBER = '525532589721';
const PHONE_NUMBER    = '+525564838458';
const WA_MSG = encodeURIComponent('Hola, me gustaría recibir información sobre sus servicios jurídicos.');

/* ── Contacto ─────────────────────────────────── */
function initContacto() {
  const waURL   = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}` : null;
  const btnWA   = document.getElementById('btn-whatsapp');
  const btnPhone= document.getElementById('btn-phone');

  if (waURL) {
    btnWA.href = waURL; btnWA.target = '_blank'; btnWA.rel = 'noopener noreferrer';
  } else {
    btnWA.addEventListener('click', e => { e.preventDefault(); alert('WhatsApp próximamente disponible.'); });
  }

  if (PHONE_NUMBER) {
    btnPhone.href = `tel:${PHONE_NUMBER}`;
  } else {
    btnPhone.addEventListener('click', e => { e.preventDefault(); alert('Número telefónico próximamente disponible.'); });
  }
}

/* ── Animaciones card servicios ───────────────── */
function initAnimaciones() {
  // Elementos a animar en la segunda card
  const targets = [
    ...document.querySelectorAll('.servicios-header'),
    ...document.querySelectorAll('.service-cat'),
    ...document.querySelectorAll('.card-closing'),
  ];

  // Estado inicial: ocultos
  targets.forEach(el => el.classList.add('anim-hidden'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el    = entry.target;
      const index = targets.indexOf(el);

      // Delay escalonado según posición
      setTimeout(() => {
        el.classList.remove('anim-hidden');
        el.classList.add('anim-visible');
      }, index * 120);

      observer.unobserve(el);
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}

/* ── Efecto contador en icono al entrar ───────── */
function initIconPulse() {
  const icons = document.querySelectorAll('.service-cat .cat-icon');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('icon-pop');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  icons.forEach(el => observer.observe(el));
}

/* ── Línea ornamental animada ─────────────────── */
function initOrnamentLines() {
  const lines = document.querySelectorAll('.card-servicios .ornament-line');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('line-expand');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  lines.forEach(el => observer.observe(el));
}

/* ── Init ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initContacto();
  initAnimaciones();
  initIconPulse();
  initOrnamentLines();
});
