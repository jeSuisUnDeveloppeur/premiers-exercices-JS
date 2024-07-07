//////////////////////////////////////création des fonctions/////////////////////////////////////////////
function aquerirUnNombre(){
    let nombreFactoriser,
        reponse;
    
        reponse = prompt(`entrer le nombre à aquérir `);
        nombreFactoriser = parseInt(reponse);
            while(isNaN(nombreFactoriser) || nombreFactoriser == 0){
                reponse = prompt(`Erreur la réponse ${reponse} est incorrect, merci de bien vouloir entrer un nombre entier différent de 0`);
                nombreFactoriser = parseInt(reponse);
                }
    return nombreFactoriser;
}

function calculPgcd(nombre1,nombre2){
    let resteDiv = 1,
        reponse,
        continuer;

    while(resteDiv != 0){
        resteDiv = nombre1%nombre2;
        if(resteDiv !=0){
            nombre1 = nombre2;
            nombre2 = resteDiv;
        }
      }
        reponse = prompt(`le pgcd est : ${nombre2}, souhaitez-vous continuer ? oui ou non`);
        continuer = reponse;
        return continuer;
}

/////////////////////////////////////début algorithme calcul pgcd////////////////////////////////////////
let premierNombre = 0,
    deuxiemeNombre = 0,
    recommencer ="";
do{
premierNombre = aquerirUnNombre();
deuxiemeNombre = aquerirUnNombre();
recommencer = calculPgcd(premierNombre,deuxiemeNombre);
}while(recommencer == "oui");

