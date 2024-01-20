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

  burger.addEventListener("click", () => {
    burger.classList.toggle("openmenu");
    mobile.classList.toggle("show");
    mobile.classList.toggle("hide");
    blur.classList.toggle("show2");
    blur.classList.toggle("hide2");
    burger.classList.toggle("gray_button");
    document.body.classList.toggle("overflow_hidden");
  });
});
