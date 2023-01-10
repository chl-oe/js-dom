/* Ecrivez une fonction prenant en paramètre un élément node.
retournez son parent
⚠ un module.export est attendu */

function parentAccess(){
  let node = document.getElementsByTagName("")[0];
  return node.parentNode;
}

console.log(parentAccess());
module.exports = parentAccess;