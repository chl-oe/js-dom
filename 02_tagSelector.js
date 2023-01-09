// Dans cet exercice, vous devrez créer une fonction qui renvoi le premier bouton affiché dans l’html.
// astuce: vous pouvez plus facilement tester votre code en affichant sous forme de texte le code HTML
// contenu dans votre element grâce a .innerHTML
// ⚠ un module.export est attendu

function tagSelector(){
  let element = document.getElementsByTagName("button")[0];
  return element;
  // ou bien return document.querySelector("button");
}

//console.log(tagSelector()); // element>button
//console.log(tagSelector().innerHTML); //"hello"
  //il faut mettre en commentaire les console.log lorsqu'un module.exports est demandé sinon
  //les tests ne passent pas

module.exports = tagSelector;