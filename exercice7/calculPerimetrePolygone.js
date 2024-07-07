"use strict"

let reponse,
    longueurRectangle,
    largeurRectangle,
    coteTriangle1,
    coteTriangle2,
    coteTriangle3,
    carre,
    nbrCotePolygone,
    tabValeurCotePol = [],
    valApush;

do{
    reponse = prompt(`pour quel type de polygone voulez-vous calculer le périmètre ? carré,rectangle,triangle,autre`);
    if(reponse != isNaN(reponse) && reponse =='0' && reponse != 'carré' && reponse != 'rectangle' && reponse != 'triangle' && reponse != 'autre' && reponse == 0)
    {
        alert(`Erreur la valeur ${reponse} est incorrecte merci d'entrer une des valeurs proposées (carré,rectangle,triangles ou autre)`);
    }
    console.log(reponse);

}while(reponse != isNaN(reponse) && reponse =='0' && reponse != 'carré' && reponse != 'rectangle' && reponse != 'triangle' && reponse != 'autre' && reponse ==0);

switch(reponse){
    case 'carré':
        do{
            carre = prompt(`veuillez entrez la valeur d'un des côtés du carré`);
            if(isNaN(carre) || carre == '' || carre == 0)
            {
                alert(`erreur ${carre} n'est pas valide veuillez entrer un nombre réel différents de 0`)
            }
            carre = parseInt(carre);
        }while(isNaN(carre) || carre == '' || carre == 0);
        CalculPerimetrePolygone(carre);
        break;

    case 'rectangle':
        do{
            longueurRectangle = prompt(`veuillez entrez la longueurRectangle du rectangle`);
            if(isNaN(longueurRectangle) || longueurRectangle =='' || longueurRectangle == 0){
                alert(`Erreur la valeur: ${longueurRectangle} est incorrecte veuillez entrer un nombre réél diférent de 0`);
            }
        }while((isNaN(longueurRectangle) || longueurRectangle =='' || longueurRectangle == 0));
        longueurRectangle = parseInt(longueurRectangle);

        
        do{
            largeurRectangle = prompt(`veuillez entrer la largeurRectangle du rectangle`);
            if(isNaN (largeurRectangle) || largeurRectangle == '' || largeurRectangle == 0){
                alert(`Erreur la valeur : ${largeurRectangle} est incorrecte veuillez entrer un nombre réel différent de 0 `);
            }
        }while(isNaN (largeurRectangle) || largeurRectangle == '' || largeurRectangle == 0);
        largeurRectangle = parseInt(largeurRectangle);

        CalculPerimetrePolygone(longueurRectangle,largeurRectangle);
        break;

    case 'triangle' :   
        do{
            coteTriangle1 = prompt(`veuillez-entrer la valeur du premier côté`);
            if(isNaN (coteTriangle1) || coteTriangle1 =='' || coteTriangle1 == 0){
                alert(`Erreur la valeur ${coteTriangle1} est invalide, veuillez-entrer la valeur du premier côté`);
            }
        }while(isNaN (coteTriangle1) || coteTriangle1 =='' || coteTriangle1 == 0);
        coteTriangle1 = parseInt(coteTriangle1);
  
        do{
            coteTriangle2 = prompt(`veuillez-entrer la valeur du deuxième côté`);
            if(isNaN (coteTriangle2) || coteTriangle2 =='' || coteTriangle2 == 0){
                alert(`Erreur la valeur ${coteTriangle2} est invalide, veuillez-entrer la valeur du deuxième côté`);
            }
        }while(isNaN (coteTriangle2) || coteTriangle2 =='' || coteTriangle2 == 0);
        coteTriangle2 = parseInt(coteTriangle2);

        do{
            coteTriangle3 = prompt(`veuillez-entrer la valeur du troisième côté`);
            if(isNaN (coteTriangle3) || coteTriangle3 =='' || coteTriangle3 == 0){
                alert(`Erreur la valeur ${coteTriangle3} est invalide, veuillez-entrer la valeur du troisième côté`);
            }
        }while(isNaN (coteTriangle3) || coteTriangle3 =='' || coteTriangle3 == 0);
        coteTriangle3 = parseInt(coteTriangle3);
        CalculPerimetrePolygone(coteTriangle1,coteTriangle2,coteTriangle3);
        break;

    case 'autre' :
        do{
            nbrCotePolygone = prompt(`veuillez-entrer le nombre de côté de votre polygone, celui-ci doit être supérieur à 3`);
            nbrCotePolygone = parseInt(nbrCotePolygone);
            if(isNaN (nbrCotePolygone) || nbrCotePolygone == '' || nbrCotePolygone == 0 || nbrCotePolygone < 4 ){
                alert(`Erreur la valeur ${nbrCotePolygone} est invalide, veuillez-entrer un nombre entier`);
            } 
        }while(isNaN (nbrCotePolygone) || nbrCotePolygone == '' || nbrCotePolygone == 0 ||  nbrCotePolygone < 4);

        for (let i = 0; i < nbrCotePolygone; i++){
                 valApush = prompt(`entrer la valeur du côté n°: ${i+1}`);
                 tabValeurCotePol[i]= valApush;
                 }
                 console.log(tabValeurCotePol)
             CalculPerimetrePolygone.apply(this,tabValeurCotePol);

}

