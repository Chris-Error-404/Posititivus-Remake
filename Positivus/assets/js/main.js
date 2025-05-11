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
