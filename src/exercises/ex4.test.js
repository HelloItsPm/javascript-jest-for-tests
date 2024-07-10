const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const fetchMock = require('jest-fetch-mock');

// Lire le contenu de index.html pour simuler le DOM
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

let dom;
let document;
let removeParagraphButton;
let paragraph;

beforeEach(() => {
  // Initialiser JSDOM
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  document = dom.window.document;
  global.document = document;
  global.window = dom.window;

  // Mock pour fetch
  fetchMock.enableMocks();

  // Charger ex4.js dans l'environnement JSDOM
  const { fetchData, displayData, removeParagraphContent } = require('./ex4');

  // Récupérer les éléments du DOM nécessaires
  removeParagraphButton = document.getElementById('remove-paragraph-button');
  paragraph = document.getElementById('paragraph');
});

const { fetchData, displayData, removeParagraphContent } = require('./ex4');

describe('fetchData', () => {
  test('should fetch temperature data correctly', async () => {
    // Mock pour simuler la réponse de l'API
    const mockResponse = {
      main: {
        temp: 293.15 // Exemple de données dynamiques de l'API
      }
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
        ok: true
      })
    );

    // Appeler fetchData directement pour tester
    const tempCelsius = await fetchData();

    // Vérifier si la température en Celsius est correctement calculée
    expect(tempCelsius).toBeCloseTo(20, 1); // 293.15 K -> ~20.0°C
  });

  test('should handle fetch error gracefully', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('API Error'))
    );

    // Appeler fetchData directement pour tester
    const tempCelsius = await fetchData();

    // Vérifier si null est retourné en cas d'erreur de fetch
    expect(tempCelsius).toBeNull();
  });
});

describe('displayData', () => {
  test('should display temperature correctly', async () => {
    // Mock pour simuler la réponse de l'API
    const mockResponse = {
      main: {
        temp: 293.15 // Exemple de données dynamiques de l'API
      }
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
        ok: true
      })
    );

    // Appeler displayData pour tester
    await displayData();

    // Vérifier si le contenu du paragraphe est correctement affiché
    expect(document.getElementById('paragraph').textContent).toMatch(/Temperature: \d+\.\d+°C/);
  });

  test('should display error message on fetch failure', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('API Error'))
    );

    // Appeler displayData pour tester
    await displayData();

    // Vérifier si le contenu du paragraphe affiche un message d'erreur
    expect(document.getElementById('paragraph').textContent).toBe('Error fetching data');
  });
});

describe('removeParagraphContent', () => {
  test('remove-paragraph-button should clear the paragraph content', () => {
    // Préparer le contenu du paragraphe
    document.getElementById('paragraph').textContent = 'Temperature: 20.00°C';

    // Appeler removeParagraphContent pour effacer le contenu
    removeParagraphContent();

    // Vérifier si le contenu du paragraphe est effacé
    expect(document.getElementById('paragraph').textContent).toBe('');
  });
});