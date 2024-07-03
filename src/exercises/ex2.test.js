const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
let dom;
let document;

describe('showMessage', () => {
  beforeEach(() => {
    dom = new JSDOM(html);
    document = dom.window.document;
    global.document = document;
    global.window = dom.window;

    require('./ex2.js'); // Assurez-vous que le chemin est correct selon la structure de votre projet
  });

  test('changes message text on button click', () => {
    // Sélectionner le bouton et le message dans le DOM simulé
    const clickMeButton = document.getElementById('click-me-button');
    const message = document.getElementById('message');

    // Simuler un clic sur le bouton
    clickMeButton.click();

    // Vérifier que le message a été modifié comme prévu
    expect(message.textContent).toBe('Saperlipopette, ça vient de changer! WOUAAAAAH!');
  });
});
