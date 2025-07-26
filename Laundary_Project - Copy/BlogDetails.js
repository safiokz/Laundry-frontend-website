const navbar = document.getElementById("mainNavbar");
let isFixed = false; // Track state to avoid looping

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400 && !isFixed) {
    navbar.classList.add("fixed-top", "slide-down");
    document.body.style.paddingTop = navbar.offsetHeight + "px";
    isFixed = true;
  } else if (window.scrollY < 400 && isFixed) {
    navbar.classList.remove("fixed-top", "slide-down");
    document.body.style.paddingTop = "0";
    isFixed = false;
  }
});


 
 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

 