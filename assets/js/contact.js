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
      attribute: 'required',
      isValid: input => input.value.trim() !== '',
      errorMessage: (input, label) => `${label.textContent} is required`,
    },

  ]

  const validateSingleFormGroup = formGroup => {
    const label = formGroup.querySelector('label');
    const input = formGroup.querySelector('input, textarea');
    const errorContainer = formGroup.querySelector('.error');
    const errorIcon = formGroup.querySelector('.error-icon');
    const successIcon = formGroup.querySelector('.success-icon');

    let formGroupError = false;
    for (const option of validationOptions) {
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        errorContainer.textContent = option.errorMessage(input, label);
        formGroupError = true;

      }
    }
    console.log(label, input)

    if (!formGroupError) {
      errorContainer.textContent = '';
      
    }
  
  }


  formElement.setAttribute('novalidate', '')
  formElement.addEventListener('submit', (event) => {
    event.preventDefault()
    validateAllFormGroups(formElement)
  })

  const validateAllFormGroups = (formToValidate) => {
    const formGroups = Array.from(formToValidate.querySelectorAll('.form-item'))
    
    formGroups.forEach(formgroup => {
      validateSingleFormGroup(formgroup)
    })
  }

};

validateForm("[data-form]");
