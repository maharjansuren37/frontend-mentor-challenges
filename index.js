// TOP NAVIGATION
// Toggle Menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.nav-link');
const surpriseBtn = document.querySelector('.btn-surprise');
const challengeCounter = document.querySelector('.challenge-counter');

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

surpriseBtn.addEventListener('click', () => challengeCounter.classList.toggle('hidden'));

// Active Nav Links
// navLink.forEach(n => {
//   n.addEventListener('click', () => {
//     if (n.textContent === 'Challenges') {
//       n.classList.toggle('active');
//     } else if (n.textContent === 'About') {
//       n.classList.toggle('active');
//     }
//   })
// });