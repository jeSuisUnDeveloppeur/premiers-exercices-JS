////////// variables //////////
let nombreEnfants = 0,
  estCelibataire = "",
  remuneration = 0,
  tauxParticipation = 0,
  reponse;

////////// Constantes //////////
const tauxMaximalPart = 0.5,
  seuilMajorationSalaire = 1800,
  majorationBasSalaire = 0.1,
  tauxCelibataire = 0.2,
  tauxNonCelibataire = 0.25,
  tauxParEnfant = 0.15;

/////////////recueil info utilisateurs//////////////////////

        reponse = prompt("êtes-vous célibataire ? Oui ou non");
        estCelibataire = reponse === "Oui";

        reponse = prompt("Quel est votre salaire mensuel ?");
        remuneration = parseFloat(reponse).toFixed(2);

        reponse = prompt("combien d'enfant avez-vous ?");
        nombreEnfants = parseInt(reponse);

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

