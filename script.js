let userName = document.getElementById("name");
let password = document.getElementById("password");
let form = document.querySelector("form");

let error_field = document.getElementById("error_container");

// form.addEventListener("click", (e) => {
//     e.preventDefault();
// })

form.addEventListener("submit", (e) => {

    let errorMessages = []; //to collect error messages

    if (userName.value === '' || userName.value == null) {
        errorMessages.push('Name cannot be empty');
    }

    if (password.value.length <= 4) {
        errorMessages.push("Please use password > 4 characters")
    }

    if (password.value.length >= 15) {
        errorMessages.push("Please use password < 15 characters")
    }
    if ((password.value === "password") || (password.value === "PASSWORD")) {
        errorMessages.push("PASSWORD cannot be password");
    }

    if (errorMessages.length > 0) {
        e.preventDefault(); // this prevents the user from form submission
        error_field.innerText = errorMessages.join(", \n ");
    }
});
