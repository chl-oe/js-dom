/* récupérer le premier élément de la liste ul possédant l’id #menu
Renvoyer son contenu
⚠ un module.export est attendu */

function childrenAccess(){
  let content = document.getElementById('menu');
  return content.firstElementChild;
}

console.log(childrenAccess());
module.exports = childrenAccess;
