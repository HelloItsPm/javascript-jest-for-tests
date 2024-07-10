const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
let dom;
let document;

beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;
    global.document = document;
    global.window = dom.window;

    // Assurez-vous que le chemin est correct selon la structure de votre projet
    require('./ex5.js');
});


test('hover-area interaction updates interaction-result', () => {
    // Appel des entités à tester
    const hoverArea = window.document.getElementById('hover-area');
    const interactionResult = window.document.getElementById('interaction-result');
  
    // Simuler un événement de survol
    const event = new window.MouseEvent('mouseover');
    hoverArea.dispatchEvent(event);
  
    // Vérifier si le texte a été mis à jour correctement
    expect(interactionResult.textContent).toBe('Eh oui ça marche! WOUW!');
  });