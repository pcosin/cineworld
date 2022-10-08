const buttonOpenDiego = document.getElementById("btnDiego");
const buttonOpenMariana = document.getElementById("btnMariana");

const modal = document.getElementById("modal-diego");
const modal2 = document.getElementById("modal-mariana");

const buttonCerrar = document.querySelectorAll(".btn-cerrar");

console.log(buttonCerrar);

buttonOpenDiego.addEventListener("click", () => {
  console.log("hola1");
  modal.showModal();
});

buttonOpenMariana.addEventListener("click", () => {
  console.log("hola2");

  modal2.showModal();
});

buttonCerrar.forEach((el) => {
  el.addEventListener("click", () => {
    modal.close();
    modal2.close();
  });
});
