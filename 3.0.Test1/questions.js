/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    return texte[4];
}
let afficher9Car =  (texte) => {
    return texte.substr(0,9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();

}
let IsString =  (texte) => {
    if (typeof(texte)) {
        return true;
    }
}

let AfficherExtensionString =  (texte) => {
    return texte.substr(texte.lastIndexOf('.') + 1);
}
let NombreEspaceString =  (texte) => {
    return texte.split(' ').length - 1;

}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let search = array.map(function(i){
        return Math.abs(i);
    })
    return search;
}
let sufaceCercle =  (rayon) => {
    return Math.round((Math.PI * Math.pow (rayon,2)));
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt ((ab * ab) + (ac * ac));
}
let calculIMC =  (poids, taille) => {
    return Math.round((poids / (taille * taille))*100) / 100;
}
