const newsletterInput = document.getElementById("newsletter__input")
const newsletterSubmitBtn = document.getElementById("newsletter__submit")
const errorMsg = document.getElementById("errorMsg")
newsletterSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const newsletterFormValidation = () => {
        const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(newsletterInput.value.match(emailValidation)){
            location.reload()
        }else{
            newsletterInput.focus()
            errorMsg.innerText = "invalid email address"
        }
    }
    newsletterFormValidation()
})

