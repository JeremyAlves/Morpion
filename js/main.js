// tour
var i = 0;

// valeur dans les cases html
const cases = document.querySelectorAll('.case');

console.log(cases)

// si tour est pair c'est O et impair c'est X
function tour() {
    i++;
    return i % 2 === 0 ? 'O' : 'X';
}


// fonction pour verification de possibilité de gagner
function isGagner() {
    
    // ligne horizontale
    if (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
        afficherGagnant(cases[0].innerHTML);
    } else if (cases[3].innerHTML !== "" && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        afficherGagnant(cases[3].innerHTML);
    } else if (cases[6].innerHTML !== "" && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[0].innerHTML);
    }
    // ligne verticale
    else if (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        afficherGagnant(cases[6].innerHTML);
    } else if (cases[1].innerHTML !== "" && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        afficherGagnant(cases[7].innerHTML);
    } else if (cases[2].innerHTML !== "" && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[8].innerHTML);
    }
    // ligne diagonale
    else if (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[8].innerHTML);
    } else if (cases[2].innerHTML !== "" && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        afficherGagnant(cases[6].innerHTML);
    }
    // vérifie que toutes les cases sont remplient si aucun n'a gagné pour afficher match nul
    else {
        tableauNode = Array.prototype.slice.call(document.querySelectorAll(".case"));
        tousComplet = tableauNode.every(function(i){ return i.innerHTML !== ""; });
        if (tousComplet){
            afficherNul();
        }
    }

    // (Array.prototype.slice.call(document.querySelectorAll(".case")).every(function(i){ return i.innerHTML !== ""; }))?afficherNul();
}
    
    
    // affiche un confirm et un message si gagner
    function afficherGagnant(gagnant) {
        confirm(`${gagnant} a gagné ! Voulez vous rejouer ?`)
        // supprime valeur de toute les cases
        cases.forEach(el => el.innerHTML = "")
    }
    

    // affiche un confirm et un message si match nul
    function afficherNul() {      
        confirm(`Match nul ! Voulez vous rejouer ?`)
        // supprime valeur de toute les cases
        cases.forEach(el => el.innerHTML = "")      
    }
    
    
    
    // ajoute valeur par rapport au tour si la case est vide et 
    function jouer() {
        if (!this.innerHTML)  this.innerHTML = tour();
        isGagner();
    }
    
    
    
    // click sur une case et ajouter valeur par rapport au tour
    cases.forEach(el => el.addEventListener('click', jouer));