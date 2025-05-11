//ACCORDION SCRIPT
function toggleAccordion(header) {
    const wrapper = header.parentElement;
    const icon    = header.querySelector('i');

    // Close any others
    document.querySelectorAll('.accordion.open').forEach(acc => {
      if (acc !== wrapper) {
        acc.classList.remove('open');
        acc.querySelector('i')
           .classList.replace('fa-minus', 'fa-plus');
      }
    });

    // Toggle this one
    const isOpen = wrapper.classList.toggle('open');
    icon.classList.replace(
      isOpen ? 'fa-plus'  : 'fa-minus',
      isOpen ? 'fa-minus' : 'fa-plus'
    );
}


//TESTIMONIAL CAROUSEL SCRIPT
let index = 0;
const slides = document.querySelector('.slides');

function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % 3;
    showSlide();
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 5000);

// Allow manual navigation
function prevSlide() {
    index = (index - 1 + 3) % 3;
    showSlide();
}



//ACCORDION FLOAT UP SCRIPT
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  // 1) Set up the observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1  // fire when 10% visible
  });

  // 2) Assign a stagger delay & start observing each
  accordions.forEach((el, index) => {
    // e.g. 0.1s, 0.2s, 0.3s, …
    const delay = (index + 1) * 0.05;  
    el.style.setProperty('--delay', `${delay}s`);
    observer.observe(el);
  });
});

// your existing toggle function
function toggleAccordion(headerEl) {
  const accordion = headerEl.closest('.accordion');
  accordion.classList.toggle('open');
}




//HERO SCRIPT
  document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    // small timeout to ensure CSS is ready
    setTimeout(() => hero.classList.add('animate-in'), 50);
  });
