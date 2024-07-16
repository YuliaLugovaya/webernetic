const demoButton = document.querySelector(
  ".demo__button"
) as HTMLElement | null;
const modal = document.querySelector(".modal") as HTMLElement | null;
const closeButton = document.querySelector(
  ".modal__close"
) as HTMLElement | null;
const registerButton = document.querySelector(
  ".modal__button.modal__button_transparent"
) as HTMLElement | null;
const restoreLink = document.querySelector(
  ".modal__link"
) as HTMLElement | null;
const loginButton = document.querySelector(
  ".modal__button"
) as HTMLElement | null;
const emailInput = document.querySelector('[type="text"]') as HTMLInputElement;
const passwordInput = document.querySelector(
  '[type="password"]'
) as HTMLInputElement;
const inputs = document.querySelectorAll("input");

const openModal = () => {
  if (modal) {
    modal.style.display = "flex";
  }
};

const closeModal = () => {
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
  registerButton.addEventListener("click", () => {
    emailInput.value = "";
    passwordInput.value = "";
    closeModal();
  });
}

if (restoreLink !== null) {
  restoreLink.addEventListener("click", () => {
    emailInput.value = "";
    passwordInput.value = "";
    closeModal();
  });
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

if (loginButton !== null) {
  loginButton.addEventListener("click", () => {
    if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
      closeModal();
    } else {
      emailInput.value.trim() === ""
        ? (emailInput.style.border = "1px solid red")
        : (emailInput.style.border = "");
      passwordInput.value.trim() === ""
        ? (passwordInput.style.border = "1px solid red")
        : (passwordInput.style.border = "");
    }
  });

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        input.style.border = "";
      }
    });
  });
}
