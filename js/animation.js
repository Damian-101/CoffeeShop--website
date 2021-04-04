// window.addEventListener("scroll",() => {
//     const scroll = window.requestAnimationFrame || function (callback) {
//         window.setTimeout(callback, 1000/60);
//     }
    
//     const elementsToShow = document.querySelectorAll(".show-on-scroll");
    
//     const loop = () => {
//         elementsToShow.forEach((element) => {
//             if(isElementInViewport(element)){
//                 element.classList.add("is-visible");
//             }
//         });
//         scroll(loop)
//     }
    
//     const callback = (entries) => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle("is-visible")
//         })
//     }
    
//     const observer = new IntersectionObserver(callback)
    
//     const targets = document.querySelectorAll(".show-on-scroll")
//     targets.forEach((target) => {
//         observer.observe(target)
//     })
// })
if(!!window.IntersectionObserver){
    console.log("trueeeee")
}
window.addEventListener("load", (event) => {
    function buildThresholdList() {
        let thresholds = [];
        let numSteps = 20;
      
        for (let i=1.0; i<=numSteps; i++) {
          let ratio = i/numSteps;
          thresholds.push(ratio);
        }
      
        thresholds.push(0);
        return thresholds;
      }
    const elementsToShow = document.querySelectorAll(".show-on-scroll");
    const options = {
        rootMargin: "-250px",
        threshold: 0.01,
    };
    let observer = new IntersectionObserver(function(entries,observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting === true){
                elementsToShow.forEach(elem => {
                    elem.classList.add("is-visible")
                })
            }else{
                elementsToShow.forEach(elem => {
                    elem.classList.remove("is-visible")
                })
            }
        });
    },options);
    elementsToShow.forEach(elem => {
        observer.observe(elem)
    })
})

