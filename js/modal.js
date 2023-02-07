(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  // for (let i = 0; i < refs.openModalBtn.length; i++) {
  //   refs.openModalBtn[i].addEventListener("click", toggleModal);
  // }
  refs.openModalBtn.forEach((elem) => {
    elem.addEventListener("click", toggleModal);
  });

  // refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
