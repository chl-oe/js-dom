/* Dans cet exercice, vous devrez changer la couleur (backgroundColor) de tous les boutons
en fonction de leur classe, le css est interdis:
.btn → “blue”
.btn + .danger → “red”
.btn + .warning → “yellow’
.btn + .secondary → “grey”
ordre de priorité (si plusieurs classes)
.danger > .warning > .secondary
ex: .btn.secondary.danger → “red”
⚠ ce script est a exécution directe, il ne nécessite pas de module.export ni de déclaration de fonction */

let btn1 = document.querySelectorAll(".btn");
btn1 = [...btn1];
btn1.map(e => e.style.backgroundColor = "blue");

let btn2 = document.querySelectorAll(".secondary");
btn2 = [...btn2];
btn2.map(e => e.style.backgroundColor = "grey");

let btn3 = document.querySelectorAll(".warning");
btn3 = [...btn3];
btn3.map(e => e.style.backgroundColor = "yellow");

let btn4 = document.querySelectorAll(".danger");
btn4 = [...btn4];
btn4.map(e => e.style.backgroundColor = "red");