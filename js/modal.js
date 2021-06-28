// DOM elements modal
const modalbg = document.querySelector(".bground"); // background
const modalBtn = document.querySelectorAll(".modal-btn"); // au clic sur le btn : faire apparaître le formulaire
const closeModalBtn = document.querySelectorAll(".close"); //ferme le formulaire

// Form elements 
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const eMail = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const tournaments = document.querySelector("#quantity");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("[name=location]");
const cgu = document.querySelector("#checkbox1");
const form = document.querySelector("#myform");

//Validations input
let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isBirthDateValid = false;
let isTournamentsValid =false;
let isLocationsValid = false;
let isCguValid = true;



//---SCENARIO JS ---
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.forEach((close) => close.addEventListener("click", closeModal));

disabledSubmitButton(); //bloque le bouton avant validation des Input


//FIRSTNAME
/* Ecouter l'évenènement par la méthode addEventListener() qui utilise les objets elements
On passe 2 arguments à la méthode : 
- le nom d’un évènement qu’on souhaite prendre en charge 
- le code à exécuter (une fonction) en cas de déclenchement de cet évènement.
ici: 
  évènement input et fonction non nommée.
  on ajoute le message d'erreur
  une condition If /else
  si le prénom est valide ou non
  on ajoute une fonction au champ pour dire au formulaire qu'elle est valide
*/
firstName.addEventListener("input", function(){
  showError(firstName);
  isFirstNameValid = false;

  if (firstName.value.length >= 2){
    hideError(firstName);
    isFirstNameValid = true;
  }
  isFormValidate()
});


//LASTNAME
lastName.addEventListener("input", function(){
  showError(lastName);
  isLastNameValid = false;

  if (lastName.value.length >= 2){
    hideError(lastName);
    isLastNameValid = true;
  }
  isFormValidate()
});


//EMAIL
eMail.addEventListener("input", function(){
  showError(eMail);
  isEmailValid = false;

  if (validateEmail(eMail.value)){
    hideError(eMail);
    isEmailValid = true;
  }
  isFormValidate()
});


//BIRTHDATE
birthDate.addEventListener("input", birthDateHandler);
birthDate.addEventListener("keydown", birthDateHandler);


//TOURNAMENTS
tournaments.addEventListener("input", function(){
  showError(tournaments);
  isTournamentsValid = false;

  if (tournaments.value > 0 || tournaments.value.length !== 0 ){
    hideError(tournaments);
    isTournamentsValid = true;
  }
  isFormValidate()
});


//CITY
allLocations.addEventListener("change", function(){
  showError(allLocations);
  isLocationsValid = false;

  if (checkLocations(allLocations.value)){
    hideError(allLocations);
    isLocationsValid = true;
  }
  isFormValidate()
});
//L'evt change déclenche les éléments <input> <select> <textarea> lorsqu'un changement de leur valeur est réalisé par l'utilisateur.


//CGU
cgu.addEventListener("change", function(){
  showError(cgu);
  isCguValid = false;

  if (cgu.checked !== false){
    hideError(cgu);
    isCguValid = true;
  }
  isFormValidate()
});


//--- Send Form Submit ---
form.addEventListener("submit", function(e) {
  e.preventDefault();
 
});



// --- Functions ---
// --- Birthdate ---
function birthDateHandler(){
  showError(birthDate);
  isBirthDateValid = false;

  if (birthDate.value.length === 10){
    hideError(birthDate);
    isBirthDateValid = true;
  }
  isFormValidate()
}

// --- City --- 
function checkLocations() {
  for (let i = 0; i < locations.length; i++) {
      if (locations[i].checked) {
          return true;
      }
  }
  return false;
}

// --- Close modal form (croix) ---
function closeModal() {
  modalbg.style.display = "none";
}

// --- Disable submit ---
function disabledSubmitButton(){
  document.querySelector(".btn-submit").disabled = true; // désactive par defaut submit tant que inptuts non validés
  document.querySelector(".btn-submit").style.opacity = 0.5;
  document.querySelector(".btn-submit").style.cursor = "not-allowed";
}

// --- Responsive NAV ---
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// --- Enable submit ---
function enableSubmitButton(){
  document.querySelector(".btn-submit").disabled = false; // réactive le bouton submit 
  document.querySelector(".btn-submit").style.opacity = 1;
  document.querySelector(".btn-submit").style.cursor = "grab";
}

// --- Hide error ---
function hideError(element){
  let parent = element.closest(".formData");
  parent.setAttribute("data-error-visible", false);
}

// --- Validate Form ---
function isFormValidate(){
  disabledSubmitButton();
  if(isFirstNameValid && isLastNameValid && isEmailValid && isBirthDateValid && isTournamentsValid && isLocationsValid && isCguValid ){
    enableSubmitButton();
  }
}

// --- Launch modal form ---
function launchModal() {
  modalbg.style.display = "block";
}

// ---- show Error ---
function showError(element){
  let parent = element.closest(".formData");
  parent.setAttribute("data-error-visible", true);
}
//méthode Elt.closest() renvoie l'ancêtre le plus proche de l'élément courant (ou l'élément courant) qui correspond aux sélecteurs passés comme paramètres. 
//setAttribute : Ajoute ou change la valeur d'un attribut existant pour l'élément spécifié.


// --- Validate submit ---
function validate(e) {
  document.querySelector(".modal-body").innerHTML = "Merci ! Votre réservation a été reçue";
  document.querySelector(".modal-body").style.margin = "50px 10px";
  document.querySelector(".modal-body").style.textAlign = "center";
}

// --- Input Email ---
function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
