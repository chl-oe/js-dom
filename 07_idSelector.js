/* Dans cet exercice, vous devrez sélectionner un champ input grâce a son id et me renvoyer
son contenu lors de l’execution de votre fonction.
⚠ un module.export est attendu */

function idSelector(){
  return document.getElementById("input").value;
}

console.log(idSelector());

module.exports = idSelector;