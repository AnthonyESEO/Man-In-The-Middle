
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

function aide(idBouton, idInput) {
    var boutonAide = document.getElementById(idBouton);
    var contenuAide = document.getElementById(idInput);

    boutonAide.addEventListener("click", function () {
        contenuAide.setAttribute("style", "");
    })

}

window.onload=function() {
    valider("consoleConnexionFtp", "BoutonValidationConnexionFtp", "ConnexionUtilisateur");
    aide("boutonSolutionConnexionFtp","solutionConnexionFtp");
    valider("consoleConnexionUtilisateur", "BoutonValidationConnexionUtilisateur", "ConnexionMdp");
    valider("consoleConnexionMdp", "BoutonValidationConnexionMdp", "ContenuServeur");
    valider("consoleContenuServeur", "BoutonValidationContenuServeur", "Deconnexion");
    valider("consoleDeconnexion", "BoutonValidationDeconnexion", "DeplacementDossier");
    valider("consoleDeplacementDossier", "BoutonValidationDeplacementDossier", "CreationFichier");
}