const SwiperSlider = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export { SwiperSlider }