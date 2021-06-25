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
  On fait ressortir l'élément parent par la methode element.closest
  une condition If /else
  On insert le parent.setAttribute true /false pour erreur en ROUGE
  si le prénom est valide ou non
  on ajoute une fonction au champ pour dire au formulaire qu'elle est valide
*/
firstName.addEventListener("input", function(){
  let parent = firstName.closest(".formData"); // élement parent

  if (firstName.value.length < 2){
    parent.setAttribute("data-error-visible", true);
    isFirstNameValid = false;
  }else{
    parent.setAttribute("data-error-visible", false);
    isFirstNameValid = true;
  }
  isFormValidate()
});
//La méthode Elt.closest() renvoie l'ancêtre le plus proche de l'élément courant (ou l'élément courant) qui correspond aux sélecteurs passés comme paramètres. 
//setAttribute : Ajoute ou change la valeur d'un attribut existant pour l'élément spécifié.

//LASTNAME
lastName.addEventListener("input", function(){
  let parent = lastName.closest(".formData"); // élement parent

  if (lastName.value.length < 2){
    parent.setAttribute("data-error-visible", true);
    isLastNameValid = false;
  }else{
    parent.setAttribute("data-error-visible", false);
    isLastNameValid = true;
  }
  isFormValidate()
});

//EMAIL
eMail.addEventListener("input", function(){
  let parent = eMail.closest(".formData"); 

  if (!validateEmail(eMail.value)){
    parent.setAttribute("data-error-visible", true);
    isEmailValid = false;
  }else{
    parent.setAttribute("data-error-visible", false);
    isEmailValid = true;
  }
  isFormValidate()
});

//BIRTHDATE
birthDate.addEventListener("input", function(){
  let parent = birthDate.closest(".formData"); 

  if (birthdate.value.length !== 10){
    parent.setAttribute("data-error-visible", true);
    isBirthDateValid = false;
  }else{
    parent.setAttribute("data-error-visible", false);
    isBirthDateValid = true;
  }
  isFormValidate()
});

//TOURNAMENTS
tournaments.addEventListener("input", function(){
  let parent = tournaments.closest(".formData"); 

  if (tournaments.value < 0 || tournaments.value.length === 0 ){
    parent.setAttribute("data-error-visible", true);
    isTournamentsValid = false;
  }else{
    parent.setAttribute("data-error-visible", false);
    isTournamentsValid = true;
  }
  isFormValidate()
});

//CITY
allLocations.addEventListener("change", function(){
  let parent = allLocations.closest(".formData");

  if (!checkLocations(allLocations.value)){
    parent.setAttribute("data-error-visible", true);
    isLocationsValid = false;
  }else{
    parent.setAttribute("data-error-visible", false);
    isLocationsValid = true;
  }
  isFormValidate()
});
//L'événement change déclenche les éléments <input> <select> <textarea> lorsqu'un changement de leur valeur est réalisé par l'utilisateur.

//CGU
cgu.addEventListener("change", function(){
  let parent = cgu.closest(".formData");
  console.log(parent);

  if (cgu.checked === false){
    parent.setAttribute("data-error-visible", true);
    isCguValid = false;
  }else{
    parent.setAttribute("data-error-visible", false);
    isCguValid = true;
  }
  isFormValidate()
});

//--- Send Form Submit ---
form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("12345");
});



// Functions
// --- Input city --- 
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

// --- Validate Form ---
function isFormValidate(){
  disabledSubmitButton();
  if(isFirstNameValid && isEmailValid && isBirthDateValid && isTournamentsValid && isLocationsValid && isCguValid ){
    enableSubmitButton();
  }
}

// --- Launch modal form ---
function launchModal() {
  modalbg.style.display = "block";
}

// --- Input Email ---
function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}


// --- Validate submit ---
function validate(e) {
  document.querySelector(".modal-body").innerHTML = "Merci ! Votre réservation a été reçue";
  document.querySelector(".modal-body").style.margin = "50px 10px";
  document.querySelector(".modal-body").style.textAlign = "center";
  console.log("ça marche");
  
}

