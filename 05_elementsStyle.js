/* Dans cet exercice similaire au 04, vous devrez changer la couleur de fond
de tous les boutons visibles sur la page en rouge.
⚠ ce script est a exécution directe, il ne nécessite pas de module.export ni de déclaration
de fonction */

let element = document.getElementsByTagName("button");
element = [...element];
element.map(e => e.style.backgroundColor = "red");


