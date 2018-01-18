
function valider(idInputDepart, idBoutonDepart, idConteneurDestination) {
    var inputDepart = document.getElementById(idInputDepart);
    var boutonDepart = document.getElementById(idBoutonDepart);
    var elementSuivant = document.getElementById(idConteneurDestination);

    boutonDepart.addEventListener("click",function () {
        if (inputDepart.valueOf().value=="test"){
            console.log("inputDepart = "+inputDepart.valueOf().value);
            elementSuivant.setAttribute("style","");
        }
        else
            console.log("FAUX");
    })

}

window.onload=function() {
    valider("consoleConnexionFtp", "BoutonValidationConnexionFtp", "ConnexionUtilisateur");
}