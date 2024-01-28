
// show / hide courses and workshops
function toggleCourses(){
  let buttonState = document.querySelector(".coursesList")
  if (buttonState.style.display === "block"){
    buttonState.style.display = "none"
  } else {
    buttonState.style.display = "block"
  }
}

// show / hide courses and workshops
function toggleWorkshops(){
  let buttonState = document.querySelector(".workshopsList")
  if (buttonState.style.display === "block"){
    buttonState.style.display = "none"
  } else {
    buttonState.style.display = "block"
  }
}

// front end validation copied from mailtrap example.
// uses external library for validate() function.
// remaining code just checks for empty field values.

// my custom form submission code, sending to contact.php
/* const formSubmissionButton = document.getElementById('contactSubmitButton')

const constraints = {
  formName: {
    presence: { allowEmpty: false }
  },
  formPhone: {
    presence: { allowEmpty: true }
  },
  formCompany:{
    presence: { allowEmpty: true }
  },
  formEmail: {
    presence: { allowEmpty: false },
    email: true
  },
  formMessage: {
      presence: { allowEmpty: false }
  }
};
 */
// event listener for clicking the button
/* formSubmissionButton.addEventListener('click', (e) => {
  e.preventDefault()
  const formContents = getFormContents()

  //mailtrap code for validating form on the front end
  const errors = validate(formContents, constraints);
  if (errors) {
    const errorMessage = Object
        .values(errors)
        .map(function (fieldValues) { return fieldValues.join(', ')})
        .join("\n");
    alert(errorMessage);
    return
  }
  
  // if contents are validated, send the email
  try{
    sendFormContents(formContents)
  } catch (error){
    return  
  }

  // create msg conf line, remove prev msg if there's already one there, first
  const p = document.createElement('p')
  p.innerText = "Thank you for the message! We'll get back to you soon."
  p.className = "messageSentConfirmationLine"
  try{
    const previous = document.getElementsByClassName("messageSentConfirmationLine")[0]
    previous.remove()
    document.getElementById('hookConfMsgOntoThis').append(p)
  } catch (error){
    document.getElementById('hookConfMsgOntoThis').append(p)
  }
  // empty contact form fields.
  document.querySelector('#contactNameField').value = null
  document.querySelector('#contactPhoneField').value = null
  document.querySelector('#contactCompanyField').value = null
  document.querySelector('#contactEmailField').value = null
  document.querySelector('#contactMessageField').value = null
}) */

// get form contents function
/* function getFormContents(){
  const formValues = {
  formName : document.querySelector('#contactNameField').value,
  formPhone : document.querySelector('#contactPhoneField').value,
  formCompany : document.querySelector('#contactCompanyField').value,
  formEmail : document.querySelector('#contactEmailField').value,
  formMessage : document.querySelector('#contactMessageField').value
  }
  return formValues
}

//send contents to php file functino
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
} */