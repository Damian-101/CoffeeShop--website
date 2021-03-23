window.addEventListener("scroll",scrollFixed)
function scrollFixed () {
       const nav = document.getElementsByClassName("nav")[0]
       const y = window.pageYOffset
       if(y  >= 100){
              nav.classList.add("nav__fixed")
       }else{
              nav.classList.remove("nav__fixed")
       }
}
scrollFixed()

const swiperCarousel = () => {
  //check overflow from an array of items
  const carouselItemOverFlow = () => {
    const carouselItems = document.getElementsByClassName("ourProducts__item")
    const carouselNavigation = document.getElementById("carouselNavigation")
    if(carouselItems.length > 4){
      return true;
    }else{
      return false;
    }
  }
  if(window.innerWidth > 1500 && carouselItemOverFlow() !== true){
    carouselNavigation.classList.add("dis-none-1000")
    const swiper = new Swiper('.swiper-container', {
      centeredSlides: true,
      centeredSlidesBounds: true,
      allowTouchMove: false,
     });
  }else{
    console.log(false)
  }
  const swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    centeredSlidesBounds: true,
    // allowTouchMove: false,
      breakpoints: {
        500:{
          slidesPerView: 1
        },
        790:{
          slidesPerView: 2
        },
        1000:{
          slidesPerView: 3,
        },
        1500:{
          slidesPerView: 4,
        }
      },
       // Optional parameters
       direction: 'horizontal',
      //  Navigation arrows
      //  navigation: {
      //    nextEl: '.swiper-button-next',
      //    prevEl: '.swiper-button-prev',
      //  },
     });

  // carousel custom buttons 
  const prevBtn = document.getElementById("prev-btn") 
  prevBtn.addEventListener("click", () => {
    swiper.slidePrev()
  })
  const nextBtn = document.getElementById("next-btn") 
  nextBtn.addEventListener("click", () => {
    swiper.slideNext()
  })
}

swiperCarousel()
