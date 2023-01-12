/* Même principe que l’exercice précédent, utilisez une nouvelle fonction “sleep” pour effectuer
la même action (ajout d’un élément p après 2 secondes) à la suite du click sur le bouton.
Pour cela, vous devrez utiliser .then */

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

let myButton = document.querySelector("button");
myButton.addEventListener("click", () => {
  sleep(2000) 
    .then(() => {
    let injection = document.createElement("p");
    injection.innerHTML = "Hello";
    document.body.appendChild(injection);
  });
});
