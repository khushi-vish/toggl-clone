window.addEventListener("scroll", function () {
  const navBar = document.querySelector(".nav-bar");
  if (window.scrollY > 0) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});
