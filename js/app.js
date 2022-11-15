/*=============== SELECTORS ===============*/
const errorDesktop = document.getElementById("errorDesktop");
const emailDesktop = document.getElementById("emailDesktop");
const errorMobile = document.getElementById("errorMobile");
const emailMobile = document.getElementById("emailMobile");
const form = document.getElementById("emailForm");

/*=============== FUNCTIONS ===============*/
function checkEmail(e) {
    e.preventDefault();
    
    // Show error on desktop
    if (!emailDesktop.value) {
        errorDesktop.classList.remove("hidden");
        errorDesktop.classList.add("block");
    }

    // Show error on mobile
    if (!emailMobile.value) {
        errorMobile.classList.remove("hidden");
        errorMobile.classList.add("block");
    }
}

/*=============== EVENT LISTENERS ===============*/
form.addEventListener("submit", checkEmail);