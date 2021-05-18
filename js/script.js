new Swiper('.image-slider', {
  slidesPerView: 3.1,
  navigation: {
    nextEl: '.about__arrow_next'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
      
    breakpoints: {
      900: {
        slidesPerView: 3.1,
        spaceBetween: 20
    
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 200
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 200
      },
      
  },
  
  
});
$(document).ready(function(){
  $('.header__burger').on('click', function(){
    $('.header__burger_list').toggleClass('header__burger_list_active');
    $('.header__burger').toggleClass('header__burger_active')  
  })
});