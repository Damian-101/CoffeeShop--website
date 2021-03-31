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

       const swiper = new Swiper('.swiper-container', {
              width: 1000,
              slidesPerView: 1,
              spaceBetween: 10,
              breakpoints: {
                     // when window width is >= 320px
                     320: {
                       slidesPerView: 2,
                       spaceBetween: 20
                     },
                     // when window width is >= 480px
                     480: {
                       slidesPerView: 3,
                       spaceBetween: 30
                     },
                     // when window width is >= 640px
                     640: {
                       slidesPerView: 2,
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

const prevBtn = document.getElementById("prev-btn") 
const nextBtn = document.getElementById("next-btn") 
function customCarousel () {
       // item array 
       const items = document.querySelectorAll(".ourProducts__item")
       const itemRefImages = document.querySelectorAll(".ourProducts__item-ref-img")
       // iterate nodes values 
       items.forEach((currentValue, currentIndex) =>{
              currentValue.classList.forEach((value) => {
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
              console.log(window.nextDisable)
       }
  })
