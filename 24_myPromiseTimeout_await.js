/* Même principe que l’exercice précédent, utilisez une nouvelle fonction “sleep” pour effectuer
la même action (ajout d’un élément p après 2 secondes) à la suite du click sur le bouton.
Pour cela, vous devrez utiliser les async await */

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

let myButton = document.querySelector("button");
myButton.addEventListener("click", async () => {
  await sleep(2000) 
    let injection = document.createElement("p");
    injection.innerHTML = "Hello";
    document.body.appendChild(injection);
}); 
