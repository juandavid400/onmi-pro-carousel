const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    autoplay: {
        enabled: true,
        speed: 5000,
        delay: 5000,
    },
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });

const functions = {
    swiper,
}

module.exports = functions