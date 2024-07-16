var demoButton = document.querySelector(".demo__button");
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".modal__close");
var registerButton = document.querySelector(".modal__button.modal__button_transparent");
var restoreLink = document.querySelector(".modal__link");
var loginButton = document.querySelector(".modal__button");
var emailInput = document.querySelector('[type="text"]');
var passwordInput = document.querySelector('[type="password"]');
var inputs = document.querySelectorAll("input");
var openModal = function () {
    if (modal) {
        modal.style.display = "flex";
    }
};
var closeModal = function () {
    if (modal) {
        modal.style.display = "none";
    }
};
if (demoButton !== null) {
    demoButton.addEventListener("click", openModal);
}
if (closeButton !== null) {
    closeButton.addEventListener("click", closeModal);
}
if (registerButton !== null) {
    registerButton.addEventListener("click", function () {
        emailInput.value = "";
        passwordInput.value = "";
        closeModal();
    });
}
if (restoreLink !== null) {
    restoreLink.addEventListener("click", function () {
        emailInput.value = "";
        passwordInput.value = "";
        closeModal();
    });
}
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
if (loginButton !== null) {
    loginButton.addEventListener("click", function () {
        if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            closeModal();
        }
        else {
            emailInput.value.trim() === ""
                ? (emailInput.style.border = "1px solid red")
                : (emailInput.style.border = "");
            passwordInput.value.trim() === ""
                ? (passwordInput.style.border = "1px solid red")
                : (passwordInput.style.border = "");
        }
    });
    inputs.forEach(function (input) {
        input.addEventListener("input", function () {
            if (input.value.trim() !== "") {
                input.style.border = "";
            }
        });
    });
}
