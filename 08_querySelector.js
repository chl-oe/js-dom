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

/* let element = document.getElementsByClassName("btn");
element = [...element];
element.map(e => e.style.backgroundColor = "blue"); */

document.querySelector(".btn").style.backgroundColor = "blue";
document.querySelector(".btn.danger").style.backgroundColor = "red";
document.querySelector(".btn.secondary").style.backgroundColor = "grey";
document.querySelector(".btn.warning").style.backgroundColor = "yellow";
document.querySelector(".btn.secondary.danger").style.backgroundColor = "red";
document.querySelector(".btn.secondary.warning").style.backgroundColor = "yellow";
document.querySelector(".btn.danger.warning").style.backgroundColor = "yellow";


