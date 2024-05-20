var signUp = document.getElementById("header__sign-up-wrapper");
var iconOnchange = document.getElementById("person-icon");
var cross = document.getElementById("cross");

function run() {
  signUp.id = "header__sign-up-wrapper-visible";
}

function closeModal() {
  signUp.id = "header__sign-up-wrapper";
}
