window.addEventListener("load", () => {
  const sideBar = document.getElementsByClassName("nav__right-sec-nav")[0];
  const toggleBtn = document.getElementById("toggleBtn");
  const width = window.innerWidth;

  if (width < 1000) {
    toggleBtn.addEventListener("click", function () {
      sideBar.classList.toggle("toggle-sidebar");
      document
        .getElementById("sidebar--overlay")
        .classList.toggle("sidebar--overlay-transition");
    });
  }

  // // get element outerHtml 
  // const socialmediaIcons = document.getElementsByClassName("socialmedia-icon");
  // const navLogo = document.getElementsByClassName("nav__left-logo")
  // const navMenu = document.getElementsByClassName("nav-item")


  // // add nav outerHTML to slider innerHTML
  // document.getElementById("slider-logo").innerHTML = navLogo[0].outerHTML

  // for(let i = 0; i < navMenu.length; i++){
  //   document.getElementById("slider-nav").appendChild(navMenu[i])
  //   console.log(navMenu.item(i).outerHTML)
  // }

  // console.log(navMenu)

});
