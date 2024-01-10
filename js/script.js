
// front end validation copied from mailtrap example.
// not sure this is strictly necessary, may keep for
// expediency

const constraints = {
  contactNameField: {
    presence: { allowEmpty: false }
  },
  contactPhoneField: {
    presence: { allowEmpty: true }
  },
  contactCompanyField:{
    presence: { allowEmpty: true }
  },
  contactEmailField: {
    presence: { allowEmpty: false },
    email: true
  },
  contactMessageField: {
      presence: { allowEmpty: false }
  }
};

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  const formValues = {
      contactNameField: form.elements.contactNameField.value,
      contactPhoneField: form.elements.contactPhoneField.value,
      contactCompanyField: form.elements.contactCompanyField.value,
      contactEmailField: form.elements.contactEmailField.value,
      contactMessageField: form.elements.contactMessageField.value
  };

  const errors = validate(formValues, constraints);

  if (errors) {
    event.preventDefault();
    const errorMessage = Object
        .values(errors)
        .map(function (fieldValues) { return fieldValues.join(', ')})
        .join("\n");

    alert(errorMessage);
  }
}, false);

// my custom form submission code, sending to contact.php
const formSubmissionButton = document.getElementById('contactSubmitButton')

// event listener for clicking the button
formSubmissionButton.addEventListener('click', (e) => {
  e.preventDefault()
  const formContents = getFormContents()
  sendFormContents(formContents)
})

// get form contents
function getFormContents(){
  const formValues = {
  formName : document.querySelector('#contactNameField').value,
  formPhone : document.querySelector('#contactPhoneField').value,
  formCompany : document.querySelector('#contactCompanyField').value,
  formEmail : document.querySelector('#contactEmailField').value,
  formMessage : document.querySelector('#contactMessageField').value
  }
  console.log("in getFormContents", formValues)
  return formValues
}

//send contents to php file
function sendFormContents(formContents){
  fetch("contact.php", {
    "method":"POST",
    "headers": {
      "Content-Type": "application/json; charset=utf-8"
    },
    "body": JSON.stringify(formContents)
  }).then(function(response){
    return response.text()
  }).then(function(data){
    console.log(data)
  })
}