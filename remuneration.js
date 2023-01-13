const fixe = 1100;
let qteS20 = parseInt(window.document.querySelector("#num_qteS20").value);
let qteXS = parseInt(window.document.querySelector("#num_qteXS").value);
let qteMulti = parseInt(window.document.querySelector("#num_qteMulti").value);
let nbAncien = parseInt(window.document.querySelector("#num_ancien").value);
Remuneration = fixe + primeAncien(nbAncien, fixe) + comS20(qteS20) + comXSpirit(qteXS) + comMultitec(qteMulti);
function primeAncien(nb, fix){
    if (nb >= 5 && nb <= 9){
        return fix*0.03;
    }
    else if (nb >= 10){
        return fix*0.06;
    }
}

function comS20(nb){
    const S20 = 140;
    const AxComS20 = 0.02;
    return nb*S20*AxComS20;
}

function comXS(nb){
    const XSpirit = 350;
    const AxComXS = 0.06;
    if(nb > 50){
        return (nb-50)*XSpirit*AxComXS;
    }
    else{
        return 0;
    }
}

function comMulti(nb){
    const Multitec = 180;
    let AxComMulti = [0.04, 0.06, 0.1];
    let qte = [20, 50];
    let somme = 0;
    let i, j;
    for (i = 1; i !== nb + 1; i++){
        for (j = 0; j !== AxComMulti.length; j++){
            if(qte[j] + 1 < nb < qte[j + 1]){
                somme += Multitec * AxComMulti[j];
            }
        }
    }
    return somme;
}