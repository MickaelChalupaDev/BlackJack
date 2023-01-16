var carte_banque = Math.floor(Math.random() *52)+1;
var carte_joueur = Math.floor(Math.random() *52)+1;

var cpt_totalJoueur = 0;
var cpt_totalBanque = 0;
var BlackJack = 21;

var nb = 5;

function accueil(){
    document.getElementById('newGame').style.display = 'block';
    document.getElementById('carte').innerHTML = `<img src="images/verso.jpg">`;
    document.getElementById('banque').innerHTML = `<img src="images/verso.jpg">`;
    document.getElementById('rejouer').style.display = 'hidden';
return false;
}
accueil();

function modulo(vcarte){
    vcarte = vcarte %13;
    if ((vcarte == 0) || (vcarte == 11 ) || (vcarte == 12)){
        vcarte = 10;
    }

    return vcarte;
}

function carte(){
    document.getElementById('banque').innerHTML = `<img src="images/${carte_banque}.jpg">`;
    cpt_totalBanque += modulo(carte_banque);  

    document.getElementById('carte').innerHTML = `<img src="images/${carte_joueur}.jpg">`;
    cpt_totalJoueur += modulo(carte_joueur);

    document.getElementById('scoreJoueur').innerHTML = cpt_totalJoueur;
    document.getElementById('scoreBanque').innerHTML = cpt_totalBanque;

    return false;
}

function buttonCarte(){
    carte_joueur = Math.floor(Math.random() *52)+1; 
    cpt_totalJoueur += modulo(carte_joueur); 

    document.getElementById('carte').innerHTML += `<img src="images/${carte_joueur}.jpg">`; 
    document.getElementById('scoreJoueur').innerHTML = cpt_totalJoueur;

if (cpt_totalJoueur > BlackJack){
    if (confirm('Vous avez gagné')){
    //accueil();
    window.history.go();
        dcoument.getElementById('new').style.visibility = 'visible';
  
    }
    else {
    }

}
    else if (cpt_totalJoueur === BlackJack){
 if (confirm('Vous avez fait BLACKJACK')){
    window.history.go();  
    }
    else {
        // alert('Merci et à bientot');
    }    

}
    return false;
}

function buttonReste(){
   
    while(cpt_totalBanque <= cpt_totalJoueur) { 
    carte_banque = Math.floor(Math.random() *52)+1;
    cpt_totalBanque += modulo(carte_banque);     
    document.getElementById('banque').innerHTML += `<img src="images/${carte_banque}.jpg">`;
    document.getElementById('scoreBanque').innerHTML = cpt_totalBanque;

    }

    // document.getElementById('banque').innerHTML += `<img src="images/${carte_banque}.jpg">`;
    
if (cpt_totalBanque > BlackJack){
    if (confirm('la banque à gagné')){
    window.history.go();  
    }
    else {
        // alert('Merci et à bientot');
    }
    
}
    else if (cpt_totalBanque === BlackJack){
        if (confirm('La banque à fait BLACKJACK')){
    window.history.go();  
        }
        else {
        // alert('Merci et à bientot');
        }

    }
    return false;
}

function nouvellePartie(){
    accueil();
    carte();
    carte_joueur = Math.floor(Math.random() *52)+1; 
    carte_banque = Math.floor(Math.random() *52)+1;
 
    return false;
}
