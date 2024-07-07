///////////////déclaration des variables global//////////////////////////
let premierNombre = 0,
  deuxiemeNombre = 0,
  nombreEntre1 = 0,
  nombreEntre2 = 0,
  recommencer = "";
//////////////création de la fonction aquerir un nombre//////////////////
function aquerirUnNombre() {
  let nombreFactoriser, reponse;

  reponse = prompt(`entrer le nombre à aquérir `);
  nombreFactoriser = parseInt(reponse);
  while (isNaN(nombreFactoriser) || nombreFactoriser == 0) {
    reponse = prompt(
      `Erreur la réponse ${reponse} est incorrect, merci de bien vouloir entrer un nombre entier différent de 0`
    );
    nombreFactoriser = parseInt(reponse);
  }
  return nombreFactoriser;
}
////////////////////début algorithme calcul du pgcd///////////////////////
do {
  premierNombre = aquerirUnNombre();
  deuxiemeNombre = aquerirUnNombre();
  nombreEntre1 = premierNombre;
  nombreEntre2 = deuxiemeNombre;
  pgcd = calculPgcd(premierNombre, deuxiemeNombre);
  recommencer = prompt(
    `le pgcd de ${nombreEntre1} et de ${nombreEntre2} est ${pgcd}. Souhaitez-vous calculer d'autres PGCD ? oui ou non`
  );
} while (recommencer === "oui" || recommencer === "");
