
function valider(idInputDepart, idBoutonDepart, idConteneurDestination, reponse) {
    var inputDepart = document.getElementById(idInputDepart);
    var boutonDepart = document.getElementById(idBoutonDepart);
    var elementSuivant = document.getElementById(idConteneurDestination);

    boutonDepart.addEventListener("click",function () {
        if (inputDepart.valueOf().value==reponse){
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
        console.log(contenuAide.getAttribute("style"));
        contenuAide.setAttribute("style", "");
    })

}

window.onload=function() {
    valider("consoleConnexionFtp", "BoutonValidationConnexionFtp", "ConnexionUtilisateur", "test");
    aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleConnexionUtilisateur", "BoutonValidationConnexionUtilisateur", "ConnexionMdp", "test");
    //aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleConnexionMdp", "BoutonValidationConnexionMdp", "ContenuServeur", "test");
    //aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleContenuServeur", "BoutonValidationContenuServeur", "Deconnexion", "test");
    //aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleDeconnexion", "BoutonValidationDeconnexion", "DeplacementDossier", "test");
    //aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleDeplacementDossier", "BoutonValidationDeplacementDossier", "CreationFichier", "test");
    //aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleCreationFichier", "BoutonValidationCreationFichier", "VisualisationCommandeEcritureFichier", "test");
    //aide("boutonSolutionConnexionFtp","solutionConnexionFtp");
//////////////////////

    var boutonValidation = document.getElementById("BoutonValidationVisualisationCommandeEcritureFichier");
    var container = document.getElementById("ConnexionAdminMachineCapture");
    boutonValidation.addEventListener("click", function () {
        container.setAttribute("style", "");
    });

    /*
    valider("consoleDeplacementDossier", "BoutonValidationDeplacementDossier", "CreationFichier", "test");
    aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleDeplacementDossier", "BoutonValidationDeplacementDossier", "CreationFichier", "test");
    aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleDeplacementDossier", "BoutonValidationDeplacementDossier", "CreationFichier", "test");
    aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleDeplacementDossier", "BoutonValidationDeplacementDossier", "CreationFichier", "test");
    aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleDeplacementDossier", "BoutonValidationDeplacementDossier", "CreationFichier", "test");
    aide("boutonSolutionConnexionFtp","solutionConnexionFtp");
    */
}