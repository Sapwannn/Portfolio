var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 1800,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});