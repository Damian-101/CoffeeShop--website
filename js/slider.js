const sliderOpen = () => {
    console.log("clicked")
    const x = document.getElementsByClassName("nav__side-bar")[0]
    x.classList.toggle("nav--slider-toggle")
}