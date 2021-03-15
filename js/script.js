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
