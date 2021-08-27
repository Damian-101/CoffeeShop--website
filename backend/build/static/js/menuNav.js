export const dropdown = () => {
    if(window.innerWidth < 830){
        const activeHeading = document.getElementById("activeHeading")
        const dropdownSlider = document.getElementById("dropdown-slider")
        if(dropdownSlider){
            const dropdownHeight = dropdownSlider.offsetHeight.toString()
            dropdownSlider.style.marginTop = "-" + dropdownHeight + "px"
            activeHeading.addEventListener("click",() => {
                activeHeading.classList.toggle("dropdown-toggler-anim")
                dropdownSlider.classList.toggle("dropdown-slide-anim")
            })
        }
    }
}