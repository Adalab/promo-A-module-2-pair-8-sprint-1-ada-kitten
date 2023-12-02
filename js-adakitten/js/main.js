"use strict"

const kittenCard = document.querySelector(".js-list");

// Kitten 1
const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio';
const kittenDesc1 = `
  Porte elegante, su patrón de color tan característico y sus ojos
  de un azul intenso, pero su historia se remonta a Asía al menos
  hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenRace1 = 'Siamés';

// Kitten 2
const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 = `
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenRace2 = 'Sphynx';

// Kitten 3
const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 = `
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenRace3 = 'Maine Coon';

const sectionB = document.querySelector('.new-form');
const addButton = document.querySelector(".js_plus");

/*
addButton.addEventListener('click', () => {
  sectionB.classList.remove('collapsed');
});
*/

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');
const formButton = document.querySelector(".js-btn-add");
const labelMessageError = document.querySelector('.js-label-error');

function renderRace (race){
  if (race==="") {
    return 'Uy que despiste, no sabemos su raza';
  }
  else {return race}
}

 
// const jugadora_1_nombre = 'Alexia';
// const jugadora_1_foto = './images/Alexia.png';

// const jugadora_2_nombre = 'Athenea';
// const jugadora_2_foto = './images/Athenea.png';

function renderKitten(url, desc, name, race) {
  const contentRace = renderRace (race)
  kittenCard.innerHTML += `<li class="card">
  <article>
   <img
   class="card_img"
   src=${url}
   alt="gatito"
   />
   <h3 class="card_title">${name}</h3>
   <h4 class="card_race">${contentRace}</h4>
   <p class="card_description">
   ${desc}
   </p>
   </article>
    </li>`;
    
  
  };


formButton.addEventListener('click', addNewKitten);
function addNewKitten (event){
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;

  if( valuePhoto === "")  {
    labelMessageError.innerHTML = "Te falta añadir la foto del gatito";
  } 
  else if( valueName === "" ) {
    labelMessageError.innerHTML = "Te falta escribir el nombre del gatito";
  }
  else if( valueBreed === "") {
    labelMessageError.innerHTML = "Te falta escribir la raza del gatito";
  }
  else if( valueDesc === "") {
    labelMessageError.innerHTML = "Te falta escribir la descripción del gatito";
  }
  renderKitten(valuePhoto, valueDesc, valueName, valueBreed)
  
}

const buttonCancelForm = document.querySelector('.js-btn-cancel');

const cancelNewKitten = (event) => {
  event.preventDefault();
  inputName.value = '';
  inputDesc.value = '';
  inputPhoto.value = '';
  inputBreed.value = '';
  
  inputName.value = '';
  /*sectionB.classList.add('collapsed');*/
};
buttonCancelForm.addEventListener('click', cancelNewKitten);

// Condicionales
// const buttonSearch = document.querySelector('.js-button-search');
// buttonSearch.addEventListener('click', filterKitten);
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

// const filterKitten = (event) => {
//   if (kittenDesc1.includes(descrSearchText)) {
//     listElement.innerHTML += kittenOne;
//   }
//   if (kittenDesc2.includes(descrSearchText)) {
//     listElement.innerHTML += kittenTwo;
//   }
//   if (kittenDesc3.includes(descrSearchText)) {
//     listElement.innerHTML += kittenThree;
//   }
// };
// filterSearch.addEventListener('click', (event) => {
//   event.preventDefault();
  
//   if( kittenDesc1.includes(descrSearchText) ) {
//     //Completa el código para poner el <li> del gato 1 en la página
//     kittenCard.innerHTML = kittenSiames;
//   }
    
//   else if( kittenDesc2.includes(descrSearchText) ) {
//     //Completa el código para poner el <li> del gato 2 en la página
//     kittenCard.innerHTML = kittenSphynx;
//   }
    
//   if( kittenDesc3.includes(descrSearchText) ) {
//     //Completa el código para poner el <li> del gato 3 en la página
//     kittenCard.innerHTML = kittenMaineCoon;
//   }
// });

// Funciones

function showNewCatForm() {
  sectionB.classList.remove('collapsed');
}

function hideNewCatForm() {
  sectionB.classList.add('collapsed');
}

addButton.addEventListener('click', handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (sectionB.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}