// Toggle Menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  const dataVisible = nav.getAttribute('data-visible');

  if (dataVisible === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});