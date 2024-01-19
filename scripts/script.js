// Changing opacity on Y scroll

document.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
