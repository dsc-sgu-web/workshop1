// Navbar toggle

const navbarToggle = document.getElementById("nav-toggle");
const navbarItems = document.querySelectorAll("nav > .items-wrapper");

navbarToggle.addEventListener("click", () => {
  if (navbarToggle.dataset.active === "true") {
    navbarToggle.dataset.active = "false";
    navbarItems.forEach((item) => item.classList.add("hidden"));
    navbarToggle.children[0].classList.remove("bi-x-lg");
    navbarToggle.children[0].classList.add("bi-list");
  } else {
    navbarToggle.dataset.active = "true";
    navbarItems.forEach((item) => item.classList.remove("hidden"));
    navbarToggle.children[0].classList.add("bi-x-lg");
    navbarToggle.children[0].classList.remove("bi-list");
  }
});
