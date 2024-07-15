const modal = document.querySelector('.modal') as HTMLElement | null;

const openModal = () => {
  if (modal) {
    modal.style.display = 'block';
}
};

const closeModal = () => {
  if (modal) {
    modal.style.display = 'none';
}
};

const closeButton = modal?.querySelector('.modal__close') as HTMLElement | null;
if (closeButton !== null) {
  closeButton.addEventListener('click', closeModal);
}

window.addEventListener('click', (event) => {
  if (event.target === modal) {
      closeModal();
  }
});

const demoButton = document.querySelector('.demo__button') as HTMLElement | null;
if (demoButton !== null) {
  demoButton.addEventListener('click', () => {
      openModal();
  });
}