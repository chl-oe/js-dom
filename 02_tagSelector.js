// Dans cet exercice, vous devrez créer une fonction qui renvoi le premier bouton affiché dans l’html.
// astuce: vous pouvez plus facilement tester votre code en affichant sous forme de texte le code HTML
// contenu dans votre element grâce a .innerHTML
// ⚠ un module.export est attendu

function tagSelector(){
  return document.querySelector("button");
}

console.log(tagSelector()); // element>button
console.log(tagSelector().innerHTML); //"hello"

module.exports = tagSelector;