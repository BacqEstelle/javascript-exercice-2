let CreationTableauLangages =  () => {
    let langages = ["Html","CSS","Java","PHP"];
    return langages;
}

let CreationTableauNombres =  () => {
    let nombres = [0, 1, 2, 3, 4, 5]
    return nombres;
}

let RemplacementElement =  (langages) => {
    langages.splice(2,1,"Javascript");
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.splice(4,0, "Ruby");
    langages.splice(5,0,"Python");
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.splice(0,0, -2 );
    nombres.splice(1,0, -1);
    return nombres;

}

let SuppressionPremierElement =  (langages) => {
    langages.splice(0,1);
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.splice(4,1);
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {

        reseaux_sociaux = reseaux_sociaux_chaine.split(",");
        return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
       let langages_chaine = langages.toString();
        return langages_chaine;
}

let TriTableau =  (reseaux_sociaux) => {
        reseaux_sociaux.sort();
        return reseaux_sociaux;
}

let InversionTableau =  (reseaux_sociaux) =>{
        reseaux_sociaux.reverse();
        return reseaux_sociaux;
}
