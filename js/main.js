(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a'));

  /* Mobile menu ------------------------------------------------------------ */
  function setMenu(open) {
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () { setMenu(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  /* Header background once the hero scrolls away -------------------------- */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Active section in the nav ---------------------------------------------- */
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  function markActive() {
    var line = window.innerHeight * 0.4;
    var current = null;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= line) current = section;
    });
    // at the very bottom, the last section is the active one
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }
    navLinks.forEach(function (link) {
      var active = current && link.getAttribute('href') === '#' + current.id;
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', markActive, { passive: true });
  window.addEventListener('resize', markActive);
  markActive();

  /* Fade-in on scroll ------------------------------------------------------ */
  var reveals = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* Placeholder sign-up form (remove once the MailerLite embed is in) ------ */
  var placeholder = document.querySelector('[data-placeholder-form] form');
  if (placeholder) {
    placeholder.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = placeholder.querySelector('.signup__status');
      if (!placeholder.checkValidity()) {
        status.textContent = 'Please fill in your name, a valid email and tick the box.';
        return;
      }
      status.textContent = 'This form is a placeholder and is not connected yet.';
    });
  }
})();
