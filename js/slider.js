const sliderStyles = document.getElementsByClassName("nav__side-bar")[0]
const width = innerWidth
const sliderOpen = () => {
    sliderStyles.classList.toggle("nav--slider-toggle")
}
if(width<1300){
    sliderStyles.classList.add("slider")
}else{
    sliderStyles.classList.remove("slider")
}