"use strict";

function calculPgcd(nombre1,nombre2){
  let resteDiv = 1;

  while(resteDiv != 0)
    {
      resteDiv = nombre1%nombre2;
      if(resteDiv != 0)
      {
          nombre1 = nombre2;
          nombre2 = resteDiv;
      }
    }
      return nombre2;
}