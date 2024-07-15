var modal = document.querySelector('.modal');
// modal.className = 'modal';
// modal.innerHTML = `
//   <div class="modal__content">
//       <span class="modal__close">&times;</span>
//       <h2>Войти в систему</h2>
//       <!-- Добавьте форму для входа в систему -->
//   </div>
// `;
// document.body.appendChild(modal);
var openModal = function () {
    if (modal) {
        modal.style.display = 'block';
    }
};
var closeModal = function () {
    if (modal) {
        modal.style.display = 'none';
    }
};
var closeButton = modal === null || modal === void 0 ? void 0 : modal.querySelector('.modal__close');
if (closeButton !== null) {
    closeButton.addEventListener('click', closeModal);
}
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
var demoButton = document.querySelector('.demo__button');
if (demoButton !== null) {
    demoButton.addEventListener('click', function () {
        openModal();
    });
}
