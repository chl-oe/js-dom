/* créez un script qui injectera un element <p></p>, possédant comme contenu “hello world”
comme premier enfant de l’élément préexistant dans le dom div#content
⚠ ce script est a exécution directe, il ne nécessite pas de module.export ni de déclaration de fonction */

let container = document.getElementById("content");
let injection = document.createElement("p");
injection.textContent = "hello world";
container.appendChild(injection);