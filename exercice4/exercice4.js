let rizTotal = 0,
    numeroCase,
    rizCase,
    rizparcase;

    for(numeroCase = 0; numeroCase < 64; numeroCase++){
        rizCase = 2**numeroCase;
        rizTotal += rizCase;
        document.writeln(`<p>le nombre de grains de riz à la case n'° ${numeroCase} est de ${rizCase}</p>`);
    }
    document.writeln(`<p>les grains de riz totaux sont de : ${rizTotal} </p>`);
    
    