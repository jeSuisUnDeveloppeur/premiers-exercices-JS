     let    varTauxParticipation = 0,
            varSituationEmploye = "",
            varSalaireEmploye = 0,
            varEnfantEmploye = 0;

    const plafond= 50/100;

        
            varSituationEmploye=prompt("êtes-vous célibataire ?");
            if(varSituationEmploye ==="oui"){
                    varTauxParticipation += 20/100;
                }
                else{
                        varTauxParticipation += 25/100;
                }
            

            varSalaireEmploye=prompt("Quel est votre salaire mensuel ?");
            varEnfantEmploye=prompt("combien d'enfant avez-vous ?");

            varTauxParticipation += varEnfantEmploye*15/100;
            do{
                if(varSituationEmploye !="oui" || varSituationEmploye !="non")
                {
                    alert(`la réponse ${varSituationEmploye} est incorrect, merci de rentrer oui ou non`);
                    varSituationEmploye=prompt("êtes-vous célibataire ?");
                }
                if(varSituationEmploye ==="oui"){
                    varTauxParticipation += 20/100;
                }
                else{
                        varTauxParticipation += 25/100;
                }
            }while(varSituationEmploye !=="oui" || varSituationEmploye !=="non")

            if(varSalaireEmploye < 1800){
                varTauxParticipation += 10/100;
            }

            if(varTauxParticipation >= plafond){
                alert("votre taux de participation employeur est de 50%");
            }
            else{
                alert("votre taux de participation employeur est de : "+ varTauxParticipation);
            }


