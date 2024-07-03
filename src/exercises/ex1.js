// Sélectionne l'élément bouton avec l'ID 'add-class-button'.
const addButton = document.getElementById('add-class-button');

// Sélectionne l'élément <div> avec l'ID 'element'.
const element = document.getElementById('element');

// Définir une fonction qui ajoute une classe CSS à l'élément <div>.
function addClassToElement() {
  element.classList.add('new-style'); // Ajoute la classe 'new-class'
}

addButton.addEventListener('click', addClassToElement);