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

    require('./ex3.js'); // Assurez-vous que le chemin est correct selon la structure de votre projet
    });

  test('Test submit button functionality', () => {
    // Sélectionner le formulaire et le bouton de soumission
    const emailForm = document.getElementById('email-form');
    const emailInput = document.getElementById('email-input');
    const validationMessage = document.getElementById('validation-message');
    const submitButton = emailForm.querySelector('button[type="submit"]');
  
    // Simuler un clic sur le bouton de soumission avec une adresse email vide
    emailInput.value = '';
    submitButton.click();
    expect(validationMessage.textContent).toContain('Please enter');
  
    // Simuler un clic sur le bouton de soumission avec une adresse email invalide
    emailInput.value = 'invalidemail';
    submitButton.click();
    expect(validationMessage.textContent).toContain('Please enter a valid email');
    
    // Tester avec une adresse email valide
    emailInput.value = 'test@example.com';
    submitButton.click();
    expect(validationMessage.textContent).toContain('Email is valid');
    });
  
  afterEach(() => {
    // Nettoyer et libérer les ressources JSDOM
    dom.window.close();
    });
});