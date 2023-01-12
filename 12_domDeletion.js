/* Supprimer du dom tous les éléments <p></p>
⚠ ce script est a exécution directe, il ne nécessite pas de module.export ni de déclaration de fonction */

let element = document.querySelectorAll("p");
element = [...element];
element.map(e => e.remove());

console.log(element);


