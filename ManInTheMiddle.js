
function valider(idInputDepart, idBoutonDepart, idBoutonDestination, reponse) {
    var inputDepart = document.getElementById(idInputDepart);
    var BoutonDepart = document.getElementById(idBoutonDepart);
    element.addEventListener("click",function () {
        var elementSuivant = document.getElementById(idBoutonDestination);
        elementSuivant.setAttribute("style","");
    })

}

window.onload=function() {
    // valider("bouton","2");
    var inputDepart = document.getElementById("inputDepart");
    var boutonDepart = document.getElementById("bouton");

    boutonDepart.addEventListener("click",function () {
        console.log("inputDepart = "+inputDepart.valueOf().value);
    })
}