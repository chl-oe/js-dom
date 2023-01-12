/* Utilisez setTimeout pour ajouter un élément p au dom,
2 secondes après un click sur un élément bouton. */

let myButton = document.querySelector("button");
myButton.addEventListener("click", function() {
  setTimeout(() => {g
    let injection = document.createElement("p");
    injection.innerHTML = "Hello";
    document.body.appendChild(injection);
  }, 2000);
});

