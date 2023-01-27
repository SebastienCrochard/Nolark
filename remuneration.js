window.addEventListener("load", function() {
    // Déclaration de l'index de parcours
    let i;
    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll("input");
    // Parcours de tabInputs en s'appuyant sur le nombre de <input>
    for (i=0 ; i < tabInputs.length ; i++) {
    // Ajout d'un Listener sur tous les <input> sur l'évènement onKeyUp
    tabInputs[i].addEventListener("keyup", calcRemu);
    }
   });

   /**
* Fonction principale qui s'occupe de récupérer les valeurs, calculer le montant
* de la rémunération et qui s'occupe ensuite de l'afficher
*
* @returns {undefined}
*/
function calcRemu() {
    // Déclaration des constantes
    const fixe = 1100.0;
    // Déclaration et affectation des variables
 let nbAncien = parseInt(window.document.querySelector("#num_ancien").value);
 let nbS20 = parseInt(window.document.querySelector("#num_s20").value);
 let nbXS = parseInt(window.document.querySelector("#num_xs").value);
 let nbMulti = parseInt(window.document.querySelector("#num_multi").value);
 let remuneration = fixe + recupPrimeAnciennete(nbAncien, fixe) + recupComS20(nbS20)
 + recupComXS(nbXS) + recupComMulti(nbMulti);
 // Affichage du résultat
 window.document.querySelector("#remuneration").innerHTML =
 "La rémunération sera de : " + remuneration + " €";
}

/**
* Fonction principale qui s'occupe de récupérer les valeurs, calculer le montant
* de la rémunération et qui s'occupe ensuite de l'afficher
*
* @returns {undefined}
*/
function calcRemu() {
    // Déclaration des constantes
    const fixe = 1100.0;
    // Déclaration et affectation des variables
    let nbAncien = recupValeur("#num_ancien");
    let nbS20 = recupValeur("#num_s20");
    let nbXS = recupValeur("#num_xs");
    let nbMulti = recupValeur("#num_multi");
    let remuneration = fixe + recupPrimeAnciennete(nbAncien, fixe) + recupComS20(nbS20)
    + recupComXS(nbXS) + recupComMulti(nbMulti);
    // Affichage du résultat
    window.document.querySelector("#remuneration").innerHTML =
    "La rémunération sera de : " + remuneration + " €";
   }
   /**
   * Fonction qui retourne un entier depuis une valeur prise dans le DOM
   *
   * @param {String} id
   * @return {integer}
   */
   function recupValeur(id) {
    return parseInt(window.document.querySelector(id).value);
   }

   // Affichage du résultat
window.document.querySelector("#remuneration").innerHTML =
"La rémunération sera de : " + remuneration + recupIndemKm(km); " €";

// Affichage du résultat
afficheRemu(remuneration);
/**
* Fonction qui affiche la rémunération dans l'élément d'id "remuneration"
*
* @param {type} nombre
* @return {undefined}
*/
function afficheRemu(nombre) {
    window.document.querySelector("#remuneration").innerHTML =
    "La rémunération sera de : " + nombre + " €";
   }

   /**
* Fonction qui retourne l'indemnité kilométrique
* @param {type} nb
* @returns {float}
*/
function recupIndemKm(nb) {
    const prix = 0.15, plafond = 350;
    let indem = nb * prix;
    if (indem > plafond) {
    return plafond;
    }
    else {
    return indem;
    }
   }