// Créez un script qui lors de son execution, modifie le texte contenu dans le premier “button” trouvé
// dans le dom en “hello world”
// ⚠ ce script est a exécution directe, il ne nécessite pas de module.export ni de déclaration de fonction

document.getElementsByTagName("button")[0].innerHTML = "hello world";


/* possibilité de l'écrire aussi avec querySelector() =>
document.querySelector("button").innerHTML = "hello world" */
