// MODAL

const buttonOpenDiego = document.getElementById("btnDiego");
const buttonOpenMariana = document.getElementById("btnMariana");

const modal = document.getElementById("modal-diego");
const modal2 = document.getElementById("modal-mariana");

const buttonCerrar = document.querySelectorAll(".btn-cerrar");

buttonOpenDiego.addEventListener("click", () => {
  modal.showModal();
});

buttonOpenMariana.addEventListener("click", () => {
  modal2.showModal();
});

buttonCerrar.forEach((el) => {
  el.addEventListener("click", () => {
    modal.close();
    modal2.close();
  });
});

document.addEventListener(
  "click",
  (event) => {
    if (event.target === modal2 || event.target === modal) {
      modal2.close();
      modal.close();
    }
  },
  false
);

// SLIDER
const carousel = new bootstrap.Carousel("#myCarousel");
