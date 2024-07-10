function trouverValeurMaximale(tableau) {
    // Vérifier si le tableau est vide
    if (tableau.length === 0) {
        console.log("Le tableau est vide.");
        return; // Sortir de la fonction si le tableau est vide
    }

    // Utilisation de Math.max avec spread syntax (...) pour trouver la valeur maximale
    let valeurMaximale = Math.max(...tableau);

    console.log("le tableau est :", (tableau))

    // Affichage de la valeur maximale
    console.log("La valeur maximale du tableau est :", valeurMaximale);

    //retourne le tableau
    return tableau;
}

function retirerDoublonsEtAfficher(tableau) {
    // Créer un nouvel ensemble à partir du tableau pour supprimer les doublons
    let ensembleSansDoublons = new Set(tableau);

    // Convertir l'ensemble en tableau (pour conserver l'ordre d'origine si nécessaire)
    let tableauSansDoublons = [...ensembleSansDoublons];

    // Trouver les doublons
    let doublonsSupprimes = tableau.filter((valeur, index) => tableau.indexOf(valeur) !== index);

    // Afficher les doublons supprimés
    if (doublonsSupprimes.length > 0) {
        console.log("Doublons supprimés :", doublonsSupprimes);
    } else {
        console.log("Aucun doublon trouvé dans le tableau.");
    }

    // Afficher le nouveau tableau sans doublons
    console.log("Tableau sans doublons :", tableauSansDoublons);

    //retourne le tableau
    return tableau;
}

function trouverEtAfficherChiffre(tableau, chiffreRecherche, chiffreRecherche2) {

    // Vérifier si le chiffre recherché est présent dans le tableau
    let indexChiffre = tableau.indexOf(chiffreRecherche);
    if (indexChiffre !== -1) {
        console.log(`Le chiffre ${chiffreRecherche} a été trouvé à l'index ${indexChiffre} dans le tableau.`);
    } else {
        console.log(`Le chiffre ${chiffreRecherche} n'a pas été trouvé dans le tableau.`);
    }

    let indexChiffre2 = tableau.indexOf(chiffreRecherche2);
    if (indexChiffre2 !== -1) {
        console.log(`Le chiffre ${chiffreRecherche2} a été trouvé à l'index ${indexChiffre2} dans le tableau.`);
    } else {
        console.log(`Le chiffre ${chiffreRecherche2} n'a pas été trouvé dans le tableau.`);
    }

    //retourne le tableau
    return tableau;
}

function trierEtAfficherCroissant(tableau) {

    // Utiliser sort() avec une fonction de comparaison pour trier les nombres dans l'ordre croissant
    tableau.sort((a, b) => a - b);

    // Afficher le tableau trié
    console.log("Tableau trié par ordre croissant :", tableau);

    //retourne le tableau
    return tableau;
}

let tableauExemple = [7, 5, 16, 16, 30, 15, 25, 20, 31];

// Appliquer les fonctions dans l'ordre en mettant à jour le tableau à chaque étape
tableauExemple = trouverValeurMaximale(tableauExemple);
tableauExemple = retirerDoublonsEtAfficher(tableauExemple);
let chiffreRecherche = 30;
let chiffreRecherche2 = 11;
tableauExemple = trouverEtAfficherChiffre(tableauExemple, chiffreRecherche, chiffreRecherche2);
tableauExemple = trierEtAfficherCroissant(tableauExemple);

// Maintenant, tableauExemple contient le tableau modifié par toutes les fonctions

// Exporter les fonctions pour les rendre disponibles dans d'autres fichiers
if (typeof window !== 'undefined') {
    window.trouverValeurMaximale = trouverValeurMaximale;
    window.retirerDoublonsEtAfficher = retirerDoublonsEtAfficher;
    window.trouverEtAfficherChiffre = trouverEtAfficherChiffre;
    window.trierEtAfficherCroissant = trierEtAfficherCroissant;
}