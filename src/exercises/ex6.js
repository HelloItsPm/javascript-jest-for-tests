// ex6.js

// Fonction pour trouver la valeur maximale dans un tableau
export function trouverValeurMaximale(tableau) {
    if (tableau.length === 0) {
        return null; // Retourner null ou gérer le cas de tableau vide selon vos besoins
    }
    return Math.max(...tableau);
}

// Fonction pour retirer les doublons d'un tableau
export function retirerDoublons(tableau) {
    let tableauSansDoublons = [];
    let ensembleValeurs = new Set();

    for (let valeur of tableau) {
        if (!ensembleValeurs.has(valeur)) {
            ensembleValeurs.add(valeur);
            tableauSansDoublons.push(valeur);
        }
    }

    return tableauSansDoublons;
}
// Fonction pour vérifier si un chiffre est présent dans le tableau et afficher ses indices
export function trouverEtAfficherChiffre(tableau, chiffreRecherche, chiffreRecherche2) {
    let indexChiffre = tableau.indexOf(chiffreRecherche);
    let indexChiffre2 = tableau.indexOf(chiffreRecherche2);
    return {
        indexChiffre,
        indexChiffre2
    };
}

// Fonction pour trier un tableau de nombres dans l'ordre croissant
export function trierCroissant(tableau) {
    return tableau.slice().sort((a, b) => a - b);
}
