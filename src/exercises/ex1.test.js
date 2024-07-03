/**
 * @jest-environment jsdom
 */

describe('addClassToElement', () => {
  beforeEach(() => {
    // Configurer le DOM avant chaque test
    document.body.innerHTML = `
      <button id="add-class-button">Add Class</button>
      <div id="element" class="initial-class"></div>
    `;

    // Sélectionner les éléments du DOM
    const addButton = document.getElementById('add-class-button');
    const element = document.getElementById('element');

    require('./ex1');
  });

  test('adds class to element on button click', () => {
    const addButton = document.getElementById('add-class-button');
    const element = document.getElementById('element');

    // Simuler un clic sur le bouton
    addButton.click();

    // Vérifier que la classe a été ajoutée
    expect(element.classList.contains('new-style')).toBe(true);

  });
});
