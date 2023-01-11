/* créez un bouton possédant l’id “toggle”, Ajoute ou enlève une classe “is-open” sur la div possédant l’id “modal”.
si “is-open” est présent lors du click, enlève “is-open” de la class de “modal”
si “is-open” est absent lors du click, ajoute “is-open” a la classe modal */

let myButton = document.getElementById("toggle");
myButton.addEventListener("click", function() {
  let container = document.getElementById("modal");
  container.classList.toggle("is-open");
console.log(container);
});


