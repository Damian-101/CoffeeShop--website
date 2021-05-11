
const swiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        500:{
          slidesPerView: 2,
          spaceBetween: 20
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      },
     });
     


     const swiperTestimonial = new Swiper('.swiper-testimonial', {
      direction: 'horizontal',
      breakpoints: {
       0: {
         slidesPerView: 1,
         spaceBetween: 100
       }
     },
    });
    

    
    



const sliderNav = (prevBtnId, nextBtnId , swiperName) => {
    const prevBtn = document.getElementById(prevBtnId)
    const nextBtn = document.getElementById(nextBtnId)
      // carousel custom buttons 
    prevBtn.addEventListener("click", () => {
      swiperName.slidePrev()
      console.log("clicked")
    })
    nextBtn.addEventListener("click", () => {
      swiperName.slideNext()
    })
    console.log(prevBtn,nextBtn)
}     

sliderNav("testimonials-prevBtn","testimonials-nextBtn",swiperTestimonial)
sliderNav("ourProducts-prev","ourProducts-next",swiper)
    
