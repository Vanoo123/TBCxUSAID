// Changing opacity on Y scroll

document.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
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
