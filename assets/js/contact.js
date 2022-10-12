const botonEnviar = document.querySelector("[data-btn-contacto]");

botonEnviar.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.nombre.value;

  console.log("name");

  Email.send({
    Host: "smtp.yourisp.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
});
