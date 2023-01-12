/* Ajouter l’élément <p id=”result”>hovered</p> comme enfant de div.content lorsque l’élément <p
id=”hoverme”>hoverme</p>
est survolé par la souris */

let myElement = document.getElementById("hoverme");

myElement.addEventListener("mouseover", function() {
  let container = document.querySelector(".content");
  let injection = document.createElement("p")
  injection.setAttribute("id", "result")
  injection.textContent = "hovered";
  container.appendChild(injection);
  console.log(injection);
});
