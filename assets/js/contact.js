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

  const validationOptions = [
    {
      attribute: "minlength",
      isValid: (input) => input.value && input.value.length >= parseInt(input.minLength, 10),
      errorMessage: (input, label) =>
        `${label.textContent} debe tener al menos ${input.minLength} caracteres`,
    },
    {
      attribute: "pattern",
      isValid: (input) => {
        const patternRegex = new RegExp(input.pattern);
        return patternRegex.test(input.value);
      },
      errorMessage: (input, label) => `${label.textContent} no es un email válido`,
    },
    {
      attribute: "required",
      isValid: (input) => input.value.trim() !== "",
      errorMessage: (input, label) => `${label.textContent} es obligatorio`,
    },
  ];

  const validateSingleFormGroup = (formGroup) => {
    const label = formGroup.querySelector("label");
    const input = formGroup.querySelector("input, textarea");
    const errorContainer = formGroup.querySelector(".error");
    const errorIcon = formGroup.querySelector(".error-icon");
    const successIcon = formGroup.querySelector(".success-icon");

    let formGroupError = false;
    for (const option of validationOptions) {
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        errorContainer.textContent = option.errorMessage(input, label);
        input.classList.add("border-red-700");
        input.classList.remove("border-green-700");
        successIcon.classList.add("hidden");
        errorIcon.classList.remove("hidden");
        formGroupError = true;
      }
    }

    if (!formGroupError) {
      errorContainer.textContent = "";
      input.classList.add("border-green-700");
      input.classList.remove("border-red-700");
      errorIcon.classList.add("hidden");
      successIcon.classList.remove("hidden");
    }
  };

  formElement.setAttribute("novalidate", "");

  Array.from(formElement.elements).forEach((element) =>
    element.addEventListener("blur", (event) => {
      validateSingleFormGroup(event.srcElement.parentElement.parentElement);
    })
  );

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    validateAllFormGroups(formElement);
  });

  const validateAllFormGroups = (formToValidate) => {
    const formGroups = Array.from(formToValidate.querySelectorAll(".form-item"));
    formGroups.forEach((formgroup) => {
      validateSingleFormGroup(formgroup);
    });
  };
};

validateForm("[data-form]");
