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
