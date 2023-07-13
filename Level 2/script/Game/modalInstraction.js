const modalButton = document.querySelector('[data-modal-button]');

const modalButtonClose = document.querySelector('[data-modal-close]');

const specificModal = document.querySelector('[data-modal]');


modalButton.addEventListener('click', (e) => {
  const modalId = e.target.dataset.modalButton;

  const findModalElement = document.querySelector('#' + modalId);

  findModalElement.classList.remove('hidden');
});


modalButtonClose.addEventListener('click', (e) => {
  e.target.closest('[data-modal]').classList.add('hidden');
});



specificModal.addEventListener('click', (e) => {
  const fadeBlocClick = e.target.classList.contains('fade-block');

  if (fadeBlocClick) {
    e.target.classList.add('hidden');
  } else if (!fadeBlocClick) {
    return;
  }
});
