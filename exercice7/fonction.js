"use strict"

function CalculPerimetrePolygone(){
    let perimetre = 0;
   console.log(CalculPerimetrePolygone) 
    switch(arguments.length)
    {
        
        case 1 : 
            perimetre = 4*arguments[0];
            document.write(`<p>le périmètre du carré est de : ${perimetre}</p>`);
            break;
         
        case 2 :
            perimetre = 2*arguments[0] + 2*arguments[1];
            document.write(`<p>le périmètre du rectangle est de : ${perimetre}</p>`);
            break;

        case 3 :
            perimetre = arguments[0] + arguments[1] + arguments[2];
            document.write(`<p>le périmètre du triangle est de : ${perimetre}</p>`);
            break;
        
        default :
        console.log(arguments)
        for (let i = 0; i < arguments.length; i++) {
            perimetre += Number(arguments[i]);
            }
            document.write(`<p>le périmètre de votre polygone est de : ${perimetre}</p>`);
    }
}