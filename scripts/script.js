// Changing opacity on Y scroll

let prevScrollPos = window.scrollY;
let scrolledDown = false;

document.addEventListener("scroll", () => {
  // Changing opacity on Y scroll
  const header = document.getElementById("main-header");
  header.classList.toggle("scrolled", window.scrollY > 0);

  // Hiding/showing header on scroll
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    scrolledDown = false;
  } else {
    // Scrolling down
    scrolledDown = true;
  }

  if (scrolledDown && currentScrollPos > 50) {
    // Apply scrolled-down class only if scrolled down and not at the top
    header.classList.remove("scrolled-up");
    header.classList.add("scrolled-down");
  } else {
    // Remove both classes if not scrolled down or at the top
    header.classList.remove("scrolled-up", "scrolled-down");
  }

  prevScrollPos = currentScrollPos;
});

// For Burger Rotation & opening menu
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const mobile = document.getElementById("mobile");
  const blur = document.getElementById("blur");

  // Function to toggle the menu
  const toggleMenu = () => {
    burger.classList.toggle("openmenu");
    mobile.classList.toggle("show");
    mobile.classList.toggle("hide");
    blur.classList.toggle("show2");
    blur.classList.toggle("hide2");
    burger.classList.toggle("gray_button");
    document.body.classList.toggle("overflow_hidden");
  };

  // Attach the toggleMenu function to the burger click event
  burger.addEventListener("click", toggleMenu);

  // Function to close the menu when the screen size is increased
  const closeMenuOnResize = () => {
    // Check if the menu is open and the screen size is greater than a certain breakpoint (e.g., 768px)
    if (burger.classList.contains("openmenu") && window.innerWidth > 1024) {
      toggleMenu(); // Close the menu
    }
  };

  // Attach the closeMenuOnResize function to the window resize event
  window.addEventListener("resize", closeMenuOnResize);
});

// FAQ ACCORDION SCRIPT

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    // Remove "active" class from all other faqs
    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq) {
        otherFaq.classList.remove("active");
      }
    });

    // Toggle "active" class for the clicked FAQ
    faq.classList.toggle("active");
  });
});

// SLIDER SCRIPT

let currentSlide = 0;
let touchStartX;
let interval;
let touched = true;
let IsMoving = false;

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function changeSlide(direction, paging = -1) {
  if (!IsMoving) {
    IsMoving = true;
    clearInterval(interval);
    setint();

    currentSlide = direction == 1 ? currentSlide + 1 : currentSlide - 1;
    currentSlide = paging >= 0 ? paging : currentSlide;

    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }

    let current = document.querySelector('div[index="' + currentSlide + '"]');

    slides.forEach((o, i) => {
      o.style.opacity = i == currentSlide ? 1 : 0;
      o.style.visibility = i == currentSlide ? "visible" : "hidden";
    });

    updatePagination();

    setTimeout(() => {
      IsMoving = false;
    }, 1000);
  }
}

function createPagination() {
  const pagination = document.getElementById("pagination");
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      changeSlide(0, i);
    });
    pagination.appendChild(dot);
  }
  updatePagination();
}

function updatePagination() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  const touchEndX = event.touches[0].clientX;
  const touchDiff = touchStartX - touchEndX;

  if (touched) {
    if (touchDiff > 50) {
      changeSlide(1);
    } else if (touchDiff < -50) {
      changeSlide(-1);
    }
    touched = touchDiff > 50 || touchDiff < -50 ? false : true;
  }
}

function handleTouchEnd() {
  touched = true;
}

function setint() {
  interval = setInterval(() => {
    changeSlide(1);
  }, 5000);
}

createPagination();
setint();
