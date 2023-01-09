/* Dans cet exercice, vous devrez me renvoyer le texte contenu dans le 3e élément possédant la classe
“x-wing” affiché sur la page grâce a une fonction.
⚠ un module.export est attendu */

function classSelector(){
  return document.getElementsByClassName("x-wing")[2].innerHTML;
}
console.log(classSelector());

module.exports = classSelector;