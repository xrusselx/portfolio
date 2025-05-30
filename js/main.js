// window.addEventListener("scroll", () => {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 20) {
//     navbar.classList.add("navbar-scrolled");
//   } else {
//     navbar.classList.remove("navbar-scrolled");
//   }
// });

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar-scrolled", window.scrollY > 20);
});
