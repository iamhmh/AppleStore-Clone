const navbarDropdownToggles = document.querySelectorAll(".navbar .dropdown-toggle");
navbarDropdownToggles.forEach(function(toggle) {
  toggle.addEventListener("mouseover", function() {
    this.parentNode.classList.toggle("show");
    this.parentNode.querySelector(".dropdown-menu").classList.toggle("show");
  });
});

const navbarDropdownMenus = document.querySelectorAll(".navbar .dropdown-menu");
navbarDropdownMenus.forEach(function(menu) {
  menu.addEventListener("mouseleave", function() {
    this.classList.remove("show");
  });
});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', 
    {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      padding: '5rem',
      gap: '1rem',
    }
  ).mount();
} );