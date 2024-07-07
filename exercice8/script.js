let tableauxPrenom = [' Samuel',' Karim',' Nadia',' Catherine',' Kevin',' Laetitia',' Djamina',' Vincent',' Sacha'];
let prenom ='';
let index;

document.write(`<p>${tableauxPrenom}</p>`);
document.write(`<p>ce tableaux à un nombre d'index égal à : ${tableauxPrenom.length}</p>`);
tableauxPrenom.push(' Pierre');
document.write(`<p>on a actualisé ${tableauxPrenom[tableauxPrenom.length-1]}</p>`);
document.write(`<p>voici les nouvelles valeurs du tableaux : ${tableauxPrenom}</p>`);
document.write(`<p>le tableaux comporte maintenant : ${tableauxPrenom.length} index</p>`);
document.write(`<p>suppression du 1er élèment du tableaux</p>`);
tableauxPrenom.shift();
document.write(`<p>les nouveaux élèments du tableaux sont : ${tableauxPrenom} et comporte ${tableauxPrenom.length} index </p>`);
index = tableauxPrenom.indexOf(' Kevin');
document.write(`<p>modification de l'index n°${index}</p>`);
tableauxPrenom[index] = ' Kévin 6.B et 6.C en option';
document.write(`<p>le nouveau tableaux actualiser ${tableauxPrenom}</p>`);
tableauxPrenom.splice(6,1);
document.write(`<p>on supprime Vincent du tableaux</p>`)
document.write(`<p>le nouveau tableaux actualiser ${tableauxPrenom}</p>`);
document.write(`<p>on fait une boucle forEach sur le tableaux afin d'afficher la valeur de chaque élèments ainsi que leur index </p>`);
tableauxPrenom.forEach((item,index)=>{
    document.write(`<p>${item}, ${index}</p>`);
});
document.write(`<p>Pareil mais avec une boucle for afin d'afficher la valeur de chaque élèments ainsi que leur index </p>`);
for (let i = 0; i < tableauxPrenom.length; i++) {
    document.write(`<p>${tableauxPrenom[i]}, ${tableauxPrenom.indexOf(tableauxPrenom[i])}</p>`);    
}











