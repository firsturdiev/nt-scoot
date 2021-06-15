let elsAccordionToggle = document.querySelectorAll('.accordion__toggle');
let elAccordion = document.querySelector('.accordion');

elsAccordionToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.closest('.accordion').classList.toggle('accordion--active')
  })
})