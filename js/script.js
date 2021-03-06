var buttonWriteUs = document.querySelector(".button-address");
var popup = document.querySelector(".modal");
var buttonClose = document.querySelector(".modal-close");

var nameInput = popup.querySelector("[name=\"name\"]");
var emailInput = popup.querySelector("[name=\"mail\"]");
var letterInput = popup.querySelector("[name=\"letter\"]");
var form = popup.querySelector("form");

buttonWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  letterInput.value = '';

  var storedNameInputValue;
  var storedEmailInputValue;
  try {
    storedNameInputValue = localStorage.getItem("nameInputValue");
    storedEmailInputValue = localStorage.getItem("emailInputValue");
  } catch (err) {
    storedNameInputValue = "";
    storedEmailInputValue = "";
  }

  nameInput.value = storedNameInputValue;
  emailInput.value = storedEmailInputValue;

  var focusSet = false;
  if (!focusSet && !nameInput.value) {
    focusSet = true;
    nameInput.focus();
  }
  if (!focusSet && !emailInput.value) {
    focusSet = true;
    emailInput.focus();
  }
  if (!focusSet) {
    letterInput.focus();
  }
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    // noinspection SillyAssignmentJS
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("nameInputValue", nameInput.value);
    localStorage.setItem("emailInputValue", emailInput.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.code !== 'Escape') {
    return;
  }
  if (popup.classList.contains("modal-show")) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
});
