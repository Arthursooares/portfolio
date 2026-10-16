'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
const mobile = window.matchMedia('(max-width: 800px)');
function closeMenu(returnFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.menu-label').textContent = 'Menu';
  navigation.hidden = mobile.matches;
  if (returnFocus) menuButton.focus();
}
function syncNavigation() { closeMenu(); }
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.menu-label').textContent = open ? 'Fechar' : 'Menu';
  navigation.hidden = !open;
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header') && mobile.matches) closeMenu();
});
mobile.addEventListener('change', syncNavigation);
syncNavigation();
const home = document.body.classList.contains('home-page');
if (home) {
  navigation.querySelectorAll('a[data-section]').forEach(link => {
    link.setAttribute('href', '#' + link.dataset.section);
  });
  const links = [...navigation.querySelectorAll('[data-section]')];
  let queued = false;
  function updateActiveSection() {
    let current = '';
    for (const link of links) {
      const section = document.getElementById(link.dataset.section);
      if (section && section.getBoundingClientRect().top <= 180) current = link.dataset.section;
    }
    links.forEach(link => {
      if (link.dataset.section === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    queued = false;
  }
  window.addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(updateActiveSection); }
  }, {passive:true});
  updateActiveSection();
}
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, {threshold:0.05});
  document.querySelectorAll('.project, .timeline, .cert').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}
