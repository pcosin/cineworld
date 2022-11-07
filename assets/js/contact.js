const validateForm = (formSelector) => {
  return new Promise((resolve, reject) => {
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

      return !formGroupError;
    };

    formElement.setAttribute("novalidate", "");

    Array.from(formElement.elements).forEach((element) => {
      element.addEventListener("blur", (event) => {
        validateSingleFormGroup(event.srcElement.parentElement.parentElement);
      });
    });

    const validateAllFormGroups = (formToValidate) => {
      const formGroups = Array.from(formToValidate.querySelectorAll(".form-item"));
      return formGroups.every((formGroup) => validateSingleFormGroup(formGroup));
    };

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const formValid = validateAllFormGroups(formElement);

      if (formValid) {
        resolve(formElement);
        // sendMail();
        Swal.fire("Su mensaje ha sido enviado con éxito").then(function () {
          window.location = "../../index.html";
        });
      }
    });
  });
};

const sendToAPI = (formElement) => {
  const formObject = Array.from(formElement.elements)
    .filter((element) => element.type !== "submit")
    .reduce(
      (accumulator, element) => ({
        ...accumulator,
        [element.id]: element.value,
      }),
      {}
    );

  return formObject;
};

validateForm("[data-form]").then((formElement) => {
  sendToAPI(formElement);
  sendMail(formElement);
});

const sendMail = (formElement) => {
  const formObject = Array.from(formElement.elements)
    .filter((element) => element.type !== "submit")
    .reduce(
      (accumulator, element) => ({
        ...accumulator,
        [element.id]: element.value,
      }),
      {}
    );
  const { name, email, mensaje } = formObject;

  Email.send({
    SecureToken: "1d82706e-5800-4180-8b6b-9e520ab7bb9d",
    To: "info@cineworldmedia.com",
    From: "info@cineworldmedia.com",
    Subject: email,
    Body: `Mensaje de ${name}:
     ${mensaje}`,
  });
};
