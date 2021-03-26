const slider = document.getElementsByClassName("nav__side-bar")[0]
const width = innerWidth
const sliderBlur = document.getElementsByClassName("nav__sidebar-screen-blur")[0]
const toggleBtn = document.getElementsByClassName("nav__sidebar-toggler")[0];
    toggleBtn.addEventListener("click", (e) => {
        sliderBlur.classList.toggle("dis-block")
        slider.classList.toggle("nav--slider-toggle")
        var x = true
        console.log(x)
    })
    // window.sliderOpen = false
    // window.closedd = "ss"
    // toggleBtn.addEventListener("mouseup" ,() => {
    //     if(window.sliderOpen !== true){
    //         slider.classList.toggle("nav--slider-toggle")
    //         window.sliderOpen = true
    //         console.log(window.sliderOpen)  
    //     }
    // })
    // toggleBtn.addEventListener("mousedown" ,() => {
    //     if(window.sliderOpen === true){
    //         slider.classList.remove("nav--slider-toggle")
    //     } 
    // })
    // console.log(window.sliderOpen)
    // $(".nav__sidebar-toggler").on("mousedown", (e) => {
    //     console.log(e.handleObj.type)
    //     console.log(window.open)
    //     if(window.open === true){
    //         $(".nav__sidebar-toggler")
    //         .off("mouseup",".nav__sidebar-toggler",open)
    //     }
    //     slider.classList.remove("nav--slider-toggle")
    // if(e.target !== slider){
    //     slider.classList.remove("nav--slider-toggle")
    // }
    // }) 

if(width<1300){
    slider.classList.add("slider")
}else{
    slider.classList.remove("slider")
}
// $("section").not("nav__side-bar").click(function(){
//     slider.classList.remove("nav--slider-toggle")
// })
// const toggleBtn = $(".nav__sidebar-toggler")[0];
// console.log(toggleBtn)
// // toggleBtn.addEventListener("click", () => {
// //         window.addEventListener("click", sliderOuter)  
// //         function sliderOuter (e) {
// //             if(e.target === toggleBtn){
// //                 slider.classList.toggle("nav--slider-toggle")
// //             }
// //             else if(e.target !== slider){
// //                 console.log("ass")
// //                 slider.classList.remove("nav--slider-toggle")
// //             }
// //         }
// // })