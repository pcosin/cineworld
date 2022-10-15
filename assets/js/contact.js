const botonEnviar = document.querySelector("[data-btn-contacto]");

// const expresiones = {
//   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// };

// botonEnviar.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = e.target.nombre.value;

//   console.log("name");

//   Email.send({
//     Host: "smtp.yourisp.com",
//     Username: "username",
//     Password: "password",
//     To: "them@website.com",
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// });

const validateForm = (formSelector) => {
  const formElement = document.querySelector(formSelector);
  console.log("hola");
};

validateForm("[data-form]");
