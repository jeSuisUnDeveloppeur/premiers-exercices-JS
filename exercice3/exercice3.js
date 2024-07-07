// déclaration des variables
let reponse = "",
  dividend = 0,
  diviseur = 0,
  resteDiv = 1,
  continuer = "";

// début algorithme
do{
    do {
        do {
            reponse = prompt(`entrer le 1er nombre`);
            dividend = parseInt(reponse);
            if (isNaN(reponse)) {
            alert(
                `Erreur, la valeur ${reponse} est incorrecte, merci d'entrer un nombre entier`
            );
            }
        } while (isNaN(reponse));
        if (reponse == 0) {
            alert(`Erreur veuillez saisir un nombre différents de 0`);
            reponse = prompt(`entrer le 1er nombre`);
            dividend = parseInt(reponse);
        }
    } while (reponse == 0);

    do {
        do {
            reponse = prompt(`entrer le 2ème nombre`);
            diviseur = parseInt(reponse);
            if (isNaN(reponse)) {
            alert(
                `Erreur, la valeur ${reponse} est incorrecte, merci d'entrer un nombre entier différent de 0`
            );
            }
        } while (isNaN(reponse));
        if (reponse == 0) {
            alert(`Erreur veuillez saisir un nombre différents de 0`);
        }
    } while (reponse == 0);


  while(resteDiv!=0){
    resteDiv = dividend%diviseur;
    if(resteDiv !=0){
        dividend = diviseur;
        diviseur = resteDiv;
    }
  }
    reponse = prompt(`le pgcd est : ${diviseur}, souhaitez-vous continuer ? oui ou non`);
    continuer = reponse;
    
}while(continuer == "oui" || continuer =="" ||continuer == null);
