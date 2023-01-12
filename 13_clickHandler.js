/* Ajouter l’élément <p id=”result”>clicked</p> comme enfant de div.content
lorsque l’élément button#clickme est cliqué */

let myButton = document.getElementById("clickme");

myButton.addEventListener("click", function() {
  let container = document.querySelector(".content");
  let injection = document.createElement("p")
  injection.setAttribute("id", "result")
  injection.textContent = "clicked";
  container.appendChild(injection);
});
