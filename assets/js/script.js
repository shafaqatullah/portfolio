'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// rotating title variables
const titleElement = document.querySelector(".info-content .title");
const titles = ["Mobile App Developer", "Web Developer", "Data Analyst"];
let currentTitleIndex = 0;

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .info-content .title {
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform-origin: center;
  }
  
  .title-slide-in {
    animation: slideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
  
  .title-slide-out {
    animation: slideOut 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
  
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes slideOut {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-30px) scale(0.8);
    }
  }
  
  .title-glow {
    animation: glow 2s ease-in-out infinite alternate;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  
  @keyframes glow {
    from {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                  0 0 20px rgba(255, 255, 255, 0.2);
    }
    to {
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.4),
                  0 0 30px rgba(255, 255, 255, 0.3),
                  0 0 40px rgba(255, 255, 255, 0.2);
    }
  }
`;
document.head.appendChild(style);

// rotating title functionality with exciting animations
const rotateTitle = function () {
  // Add slide out animation
  titleElement.classList.add('title-slide-out');

  setTimeout(() => {
    // Change text
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    titleElement.textContent = titles[currentTitleIndex];

    // Remove old classes and add slide in
    titleElement.classList.remove('title-slide-out');
    titleElement.classList.add('title-slide-in');

    // Add glow effect for a moment
    titleElement.classList.add('title-glow');

    // Remove glow after 1 second
    setTimeout(() => {
      titleElement.classList.remove('title-glow');
    }, 2000);

    // Remove slide-in class after animation completes
    setTimeout(() => {
      titleElement.classList.remove('title-slide-in');
    }, 900);

  }, 900); // Wait for slide out to complete
}

// Start rotating titles every 2 seconds
setInterval(rotateTitle, 5000);

// Initialize with glow effect
titleElement.classList.add('title-glow');
setTimeout(() => {
  titleElement.classList.remove('title-glow');
}, 1000);
// // rotating title variables
// const titleElement = document.querySelector(".info-content .title");
// const titles = ["Mobile App Developer", "Web Developer", "Data Analyst"];
// let currentTitleIndex = 0;

// // rotating title functionality
// const rotateTitle = function () {
//   currentTitleIndex = (currentTitleIndex + 1) % titles.length;
//   titleElement.textContent = titles[currentTitleIndex];
// }

// // start rotating titles every 2 seconds
// setInterval(rotateTitle, 2000);


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}