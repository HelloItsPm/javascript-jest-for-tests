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
    require('./ex6.js');
});

const { trouverValeurMaximale, retirerDoublons, trouverEtAfficherChiffre, trierCroissant } = require('./ex6');

// Définir le tableau à tester
let tableauExemple = [7, 5, 16, 16, 30, 15, 25, 20, 31];
let chiffremax = 31;
// Définir les chiffres à rechercher
let chiffreRecherche = 30;
let chiffreRecherche2 = 11;
// Définir le résultat attendu sans doublons
let resultatAttenduSansDoublons = [7, 5, 16, 30, 15, 25, 20, 31];
// Définir le résultat attendu trié par ordre croissant
let resultatAttenduTriCroissant = [5, 7, 15, 16, 16, 20, 25, 30, 31];

test('trouverValeurMaximale', () => {
    // Appeler la fonction avec le tableau défini
    let valeurMaximale = trouverValeurMaximale(tableauExemple);
    // Vérifier le résultat attendu
    expect(valeurMaximale).toBe(chiffremax); // La valeur maximale attendue
});

test('retirerDoublons', () => {
    // Appeler la fonction avec le tableau défini
    let tableauSansDoublons = retirerDoublons(tableauExemple);
    // Vérifier le résultat attendu
    expect(tableauSansDoublons).toEqual(resultatAttenduSansDoublons);
});

test('trouverEtAfficherChiffre', () => {
    // Appeler la fonction avec le tableau et les chiffres définis
    let resultats = trouverEtAfficherChiffre(tableauExemple, chiffreRecherche, chiffreRecherche2);
    // Vérifier les résultats attendus
    expect(resultats.indexChiffre).toBe(4); // Index de 30 dans le tableau
    expect(resultats.indexChiffre2).toBe(-1); // 11 n'est pas présent dans le tableau
});

test('trierCroissant', () => {
    // Appeler la fonction avec le tableau défini
    let tableauTrie = trierCroissant(tableauExemple);
    // Vérifier le résultat attendu
    expect(tableauTrie).toEqual(resultatAttenduTriCroissant);
});