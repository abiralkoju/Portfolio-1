/*navbar-hamburger menu*/
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navItems = document.getElementsByClassName("nav-items")[0];

toggleButton.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

/*auto-type (about-title-job_desc)*/
var typed = new typed(".about-title-job", {
  strings: ["web-Developer", "Programmer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// /*thank-you image hidden*/
// const thankYou = document.getElementsByClassName("thank-you-hidden")[0];
