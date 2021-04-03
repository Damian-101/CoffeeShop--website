// nav scroll fixed position 
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
document.addEventListener("load", () => {
       let swiper
if(window.innerWidth < 1000){
       swiper = new Swiper('.swiper-container', {
              width: null,
              slidesPerView: 1,
              spaceBetween: 10,
              allowTouchMove: true,
              breakpoints: {
                     // when window width is >= 320px
                     320: {
                       slidesPerView: 1,
                     },
                   },
                 // Optional parameters
                 direction: 'horizontal',
                //  Navigation arrows
                 navigation: {
                   nextEl: '.swiper-button-next',
                   prevEl: '.swiper-button-prev',
                 },
     });
     console.log("sdsds")
}
if(window.innerWidth > 1000){
       swiper = new Swiper('.swiper-container', {
              width: 500,
              slidesPerView: 1,
              spaceBetween: 10,
              allowTouchMove: false,
              breakpoints: {
                     640: {
                       slidesPerView: 1,
                       spaceBetween: 80
                     }
                   },
                 // Optional parameters
                 direction: 'horizontal',
                //  Navigation arrows
                 navigation: {
                   nextEl: '.swiper-button-next',
                   prevEl: '.swiper-button-prev',
                 },
     });
}
})
const prevBtn = document.getElementById("prev-btn") 
const nextBtn = document.getElementById("next-btn") 
function customCarousel () {
       window.nextDisable = false
       window.prevDisable = false
       // item array 
       const items = document.querySelectorAll(".ourProducts__item")
       const itemRefImages = document.querySelectorAll(".ourProducts__item-ref-img")
       // iterate nodes values 
       items.forEach((currentValue, currentIndex) =>{
              currentValue.classList.forEach((value) => {
                     if(window.innerWidth > 1000){
                            if(value === "swiper-slide-active"){
                                   itemRefImages[currentIndex].classList.add("ourProducts--img-ref-active")
                                   items[currentIndex].classList.add("item--active-size")
                            }else if(itemRefImages[currentIndex] !== undefined){
                                   itemRefImages[currentIndex].classList.remove("ourProducts--img-ref-active")
                                   items[currentIndex].classList.remove("item--active-size")
                                   if(swiper.isEnd === true){
                                          nextBtn.style.opacity = "50%"
                                          window.nextDisable = true
                                   }
                                   else{
                                          nextBtn.style.opacity = "100%"
                                          window.nextDisable = false
                                   }
                                   if(swiper.isBeginning === true){
                                          prevBtn.style.opacity = "50%"
                                          window.prevDisable = true
                                   }
                                   else{
                                          prevBtn.style.opacity = "100%"
                                          window.prevDisable = false
                                   }
                            }
                     }
              })
       })
}
customCarousel()

  // carousel custom buttons 
  prevBtn.addEventListener("click", () => {
       if(window.prevDisable === false){
              swiper.slidePrev()
              customCarousel()
       }
  })
  nextBtn.addEventListener("click", () => {
       if(window.nextDisable === false){
              swiper.slideNext()
              customCarousel()
       }
  })
