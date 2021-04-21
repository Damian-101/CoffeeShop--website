window.addEventListener("load", () => {
    const navSideBarWraper = document.getElementsByClassName("nav-side-bar-wraper")[0];
    const navSideBar = document.getElementsByClassName("nav-side-bar")[0];
    const sideBar = document.getElementsByClassName("side-bar")[0];
    const screenWidth = innerWidth;
    console.log(navSideBarWraper)

    // add or remove classes on screen change 
        if(screenWidth < 1300){
            navSideBarWraper.classList.add("dis-none")
            // get and add nav side bar values to the sideBar
            document.getElementsByClassName("side-bar")[0].appendChild(navSideBar)
        }

    // add classes on btn click 
    document.getElementById("nav__sidebar-toggler").addEventListener("click", () => {
        sideBar.classList.toggle("side-bar-width")
        document.body.style.overflow = "hidden"
    })
})
