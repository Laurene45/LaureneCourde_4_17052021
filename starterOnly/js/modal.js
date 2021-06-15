// --- DOM Elements ---
const modalbg = document.querySelector(".bground"); // background
const modalBtn = document.querySelectorAll(".modal-btn"); // au clic sur le btn : faire apparaître le formulaire
const formData = document.querySelectorAll(".formData"); //L'objet crée un ensemble de paires clef-valeur
const closeModalBtn = document.querySelectorAll(".close") //ferme le formulaire


// --- DOM Element form validate --- #issue 2b
const form =  document.getElementById("myform");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const eMail = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const Tournaments = document.querySelector("#quantity");
const city = document.querySelectorAll('.checkbox-input[name="location"]');
const cgu = document.querySelector("#checkbox1");


// --- DOM Element error ---
const myError = document.getElementById("error");
const myErrorEmail = document.getElementById("errorEmail")



// --- Déroulement JavaScript ---

// --- launch modal event : clic sur "je m'inscris" ---
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// --- Close modal (croix) - issue 1 ---
closeModalBtn.forEach((close) => close.addEventListener("click", closeModal));

// --- Validate Input ---
// --- Validata Form ---










// --- Toutes les fonctions ---
// --- Responsive NAV ---
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// --- Fonction launch modal form ---
function launchModal() {
  modalbg.style.display = "block";
}

// ---  Fonction Close modal (croix) - issue 1 ---
function closeModal() {
  modalbg.style.display = 'none';
}








// --- Send form  ---
form.addEventListener("submit", function(e) {
    e.preventDefault();
    validate();
});


// --- Fonction validate() ---
function validate() {
  // réflechir comme un array et se dire que chaque input est une ligne d'un tableau : methode push()
    let isFormValidate = [];

  // variable .push(fonction de l'input (sur la variable const correspondant à l'input))
    isFormValidate.push(validateFirstName(firstName));
    isFormValidate.push(validateLastName(lastName));
    isFormValidate.push(validateEmail(eMail));
    isFormValidate.push(validateBirthdate(birthDate));

   
  
  //méthode includes() permet de déterminer si tableau contient une valeur et renvoie true sinon, false
    if (!isFormValidate.includes(false)) {
        form.style.display = 'none';
    }
  }

 
// --- Fonctions Input ---
  //methode trim() : retirer les blancs en début et fin de chaîne

  //firstname
function validateFirstName(firstName) {
  if (firstName.value.trim().length < 2) {
      myError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom."; // ajout text HTML
      myError.style.color = 'red';
      myError.style.fontSize = '14px';
      firstName.style.border = 'solid red 3px';  
  } else {
      myError.style.display = 'none';
      firstName.style.border = 'solid green 3px';  
  }
};

  //lastname
function validateLastName(lastName) {
  if (lastName.value.trim().length < 2) {
      myError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
      myError.style.color = 'red';
      myError.style.fontSize = '14px';
      lastName.style.border = 'solid red 3px';
  } else {
      myError.style.display = 'none';
      lastName.style.border = 'solid green 3px';
  }
};

  //email  // erreur ici à la validation et au caractère manquant sur une adresse mail
function validateEmail(eMail) {
  if (eMail.value) {
      myErrorEmail.innerText = "Veuillez entrer une adresse mail valide.";
      myErrorEmail.style.color = 'red';
      myErrorEmail.style.fontSize = '14px';
      eMail.style.border = 'solid red 3px';
      
  } else {
      myErrorEmail.style.display = 'none';
      eMail.style.border = 'solid green 3px';
      
  }
};


  //birthday
  //tournaments
  //city
  //cgu











