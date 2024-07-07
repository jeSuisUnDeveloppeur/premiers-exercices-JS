"use strict";
let actual1 = 0,
    expected1 = 17,
    dividend1 = 221,
    diviseur1 = 782;

let actual2 = 0,
    expected2 = 10,
    dividend2 = 590,
    diviseur2 = 30;

let actual3 = 0,
    expected3 = -7,
    dividend3 = -21,
    diviseur3 = -7;
    

document.write(`<p>Test PGCD de ${dividend1} et ${diviseur1} est ${expected1} : ${actual1 = calculPgcd(dividend1, diviseur1) === expected1}</p>`);
document.write(`<p>Test PGCD de ${dividend2} et ${diviseur2} est ${expected2} : ${actual2 = calculPgcd(dividend2,diviseur2) === expected2}</P>`);
document.write(`<p>Test PGCD de ${dividend3} et ${diviseur3} est ${expected3} : ${actual3 = calculPgcd(dividend3,diviseur3) === expected3}</P>`);

