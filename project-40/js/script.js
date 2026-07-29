window.addEventListener("DOMContentLoaded", () => {
    let firstSwiper = document.querySelector(".first-swiper");
    if (firstSwiper) {
        const swiper = new Swiper('.first-swiper', {
            // Optional parameters
            
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
        }
      });
      var swiper = new Swiper('.third-swiper', {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      let bars = document.querySelector(".bars");
      let header = document.querySelector(".header");
      bars.addEventListener("click" , ()=>{
        header.classList.toggle("active");
      })
      header.addEventListener("click" , ()=>{
        header.classList.remove("active");
      })

})
