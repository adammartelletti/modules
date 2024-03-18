// JS for the accordion module

document.addEventListener("DOMContentLoaded", function() {
  (function () {
    "use strict";

    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach((accordion) => {
      const header = accordion.querySelector("[data-accordion]");
      header.addEventListener("click", () => {
        accordion.classList.toggle("active");
      });
    });
  })();

  // Contact section color change code
  function changeContactSectionColors(mode) {
    const contactSection = document.querySelector('.contactSection');

    if (mode === 'dark') {
      contactSection.classList.add('dark');
      contactSection.classList.remove('light');
    } else {
      contactSection.classList.add('light');
      contactSection.classList.remove('dark');
    }
  }
  
  // Ensure this function is called or accessible after the DOM is fully loaded
  // changeContactSectionColors('dark'); // Example call, if needed
});
