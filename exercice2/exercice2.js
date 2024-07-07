////////// variables //////////
let nombreEnfants,
  estCelibataire,
  remuneration,
  tauxParticipation,
  reponse,
  recomencer;

////////// Constantes //////////
const tauxMaximalPart = 0.5,
  seuilMajorationSalaire = 1800,
  majorationBasSalaire = 0.1,
  tauxCelibataire = 0.2,
  tauxNonCelibataire = 0.25,
  tauxParEnfant = 0.15;

/////////////recueil info utilisateurs//////////////////////
    do{ 
        do{
          reponse = prompt("êtes-vous célibataire ? oui ou non");
          if(reponse != "oui" && reponse != "non")
          {
            alert(`la réponse ${reponse} est incorrect veuillez entrer oui ou non`);
          }
          estCelibataire = reponse === "oui";
        }while(reponse !=="oui" && reponse !== "non");

        do{
          reponse = prompt("Quel est votre salaire mensuel ?");
          remuneration = parseFloat(reponse).toFixed(2);
          if(isNaN(reponse)){
              alert(`la réponse ${reponse} n'est pas valide, veuillez entrer un nombre !`);
          }
        }while(isNaN(reponse)); 
        do{
          reponse = prompt("combien d'enfant avez-vous ?");
          nombreEnfants = parseInt(reponse);
          if(isNaN(reponse)){
            alert(`la réponse ${reponse} n'est pas valide, veuillez entrer un nombre !`);
          }
        }while(isNaN(reponse));
          tauxParticipation = estCelibataire ? tauxCelibataire : tauxNonCelibataire;
          tauxParticipation += nombreEnfants * tauxParEnfant;
          if (remuneration < seuilMajorationSalaire) {
          tauxParticipation += majorationBasSalaire;
          }
          if (tauxParticipation > tauxMaximalPart) {
          tauxParticipation = tauxMaximalPart;
          }
          alert(
          `le taux de participation est de ${(tauxParticipation * 100).toFixed(2)}%`
          );
          recomencer = prompt(`Autres taux à calculer ? O pour oui N pour non`)
      }while(recomencer = "O");
