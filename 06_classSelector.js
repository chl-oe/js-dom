/* Dans cet exercice, vous devrez me renvoyer le texte contenu dans le 3e élément possédant la classe
“x-wing” affiché sur la page grâce a une fonction.
⚠ un module.export est attendu */

function classSelector(){
  return document.getElementsByClassName("x-wing")[2].innerHTML;
}

/*
ou bien :
const func = () => {
  Let elem = document.getElementsByClassName("x-wing"); ou element = document.querySelector("div.x-wing:nth-child(3)")
  return elem[2].innerHTML; ou elem[2].textContent;
}
*/

console.log(classSelector());

module.exports = classSelector;