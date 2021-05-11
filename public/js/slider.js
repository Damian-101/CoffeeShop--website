window.addEventListener("load", () => {
    const sideBar = document.getElementsByClassName("nav__right-sec-nav")[0];
    const toggleBtn = document.getElementById("toggleBtn")
    const width = window.innerWidth
    console.log(width)

    if(width < 1000){
        toggleBtn.addEventListener("click",function(){
            sideBar.classList.toggle("toggle-sidebar")
            document.getElementById("sidebar--overlay").classList.toggle("sidebar--overlay-transition")
        })
    }
    
})
