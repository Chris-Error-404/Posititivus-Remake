// ACCORDION
function toggleAccordion(header) {
  const wrapper = header.closest('.accordion');
  const icon    = header.querySelector('i');

  document.querySelectorAll('.accordion.open').forEach(acc => {
    if (acc !== wrapper) {
      acc.classList.remove('open');
      acc.querySelector('i').classList.replace('fa-minus', 'fa-plus');
    }
  });

  const isOpen = wrapper.classList.toggle('open');
  if (isOpen) {
    icon.classList.replace('fa-plus', 'fa-minus');
  } else {
    icon.classList.replace('fa-minus', 'fa-plus');
  }
}

// TESTIMONIAL CAROUSEL
let index = 0;
const slides = document.querySelector('.slides');
function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}
function nextSlide() {
  index = (index + 1) % 3;
  showSlide();
}
setInterval(nextSlide, 5000);
function prevSlide() {
  index = (index - 1 + 3) % 3;
  showSlide();
}

// ACCORDION FLOAT-UP
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  accordions.forEach((el, i) => {
    el.style.setProperty('--delay', `${(i+1)*0.05}s`);
    observer.observe(el);
  });
});

// HERO ANIMATION
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  setTimeout(() => hero.classList.add('animate-in'), 50);
});



//MOBILE NAV SCRIPT
/* ============================= */
/* CLOSE MENU WHEN CLICK OUTSIDE */
/* AND PREVENT BODY SCROLL IF DESIRED */
/* ============================= */
document.addEventListener('click', function(event) {
  const navToggle = document.querySelector('.mobile-header__toggle');
  const header    = document.querySelector('.mobile-header');

  // Close when clicking outside header
  if (navToggle.checked && !header.contains(event.target)) {
    navToggle.checked = false;
  }
});

// Optional: disable body scroll when menu open
document.querySelector('.mobile-header__toggle')
  .addEventListener('change', function() {
    document.body.style.overflow = this.checked ? 'hidden' : '';
  });



//EXPERIMENTAL BOX FLOAT UP SCRIPT
document.addEventListener('DOMContentLoaded', () => {
  // collect all float-up elements
  const floatUps = [
    ...document.querySelectorAll('.accordion'),
    ...document.querySelectorAll('.services .box'),
    ...document.querySelectorAll('.team .box'),
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  floatUps.forEach((el, i) => {
    // set stagger via --delay
    el.style.setProperty('--delay', `${(i + 1) * 0.02}s`);
    observer.observe(el);
  });
});
