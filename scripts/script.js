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
