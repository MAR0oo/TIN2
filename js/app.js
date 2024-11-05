function submitForm() {
  if(!validateForm()) {
    return false;
  }

  const firstName = document.getElementById("firstName").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  addRowToTable(firstName, email, age);
  clearErrors()

  return false;
}

function addRowToTable(firstName, email, age) {
  const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

  const newRow = table.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.textContent = firstName;
  cell2.textContent = email;
  cell3.textContent = age;
}


function validateForm() {

  clearErrors();

  const firstName = document.getElementById("firstName").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  let isValid = true;

  if(firstName.trim().length < 2) {
    showError("firstNameError", "To pole musi zawierać co najmniej 2 znaki");
    document.getElementById("firstName").classList.add("error");
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === "" || !emailRegex.test(email)) {
    showError("emailError", "Proszę podać prawidłowy adres email");
    document.getElementById("email").classList.add("error");
    isValid = false;
  }

  if (age.trim() === "" || isNaN(age) || age <= 0) {
    showError("ageError", "Proszę podać prawidłowy wiek");
    document.getElementById("age").classList.add("error");
    isValid = false;
  }

  return isValid;
}

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function clearErrors() {
  const errorFields = document.querySelectorAll(".error-message");
  errorFields.forEach(field => field.textContent = "");

  const inputFields = document.querySelectorAll("input");
  inputFields.forEach(field => field.classList.remove("error"));
}
