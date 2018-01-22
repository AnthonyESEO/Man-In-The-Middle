
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

function valider2(boutonDepart, containerArrive) {
    var boutonValidation = document.getElementById(boutonDepart);
    var container = document.getElementById(containerArrive);
    boutonValidation.addEventListener("click", function () {
        container.setAttribute("style", "");
    });
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
    aide("boutonSolutionConnexionUtilisateur","solutionConnexionUtilisateur");

    valider("consoleConnexionMdp", "BoutonValidationConnexionMdp", "ContenuServeur", "test");
    aide("boutonSolutionConnexionMdp","solutionConnexionMdp");

    valider("consoleContenuServeur", "BoutonValidationContenuServeur", "Deconnexion", "test");
    aide("boutonSolutionContenuServeur","solutionContenuServeur");

    valider("consoleDeconnexion", "BoutonValidationDeconnexion", "DeplacementDossier", "test");
    aide("boutonSolutionDeconnexion","solutionDeconnexion");

    valider("consoleDeplacementDossier", "BoutonValidationDeplacementDossier", "CreationFichier", "test");
    aide("boutonSolutionDeplacementDossier","solutionDeplacementDossier");

    valider("consoleCreationFichier", "BoutonValidationCreationFichier", "VisualisationCommandeEcritureFichier", "test");
    aide("boutonSolutionCreationFichier","solutionCreationFichier");
//////////////////////
    valider2("BoutonValidationVisualisationCommandeEcritureFichier","ConnexionAdminMachineCapture");

    valider("consoleConnexionAdminMachineCapture", "BoutonValidationConnexionAdminMachineCapture", "EffacementEcranConsole", "test");
    aide("boutonSolutionConnexionAdminMachineCapture","solutionConnexionAdminMachineCapture");

    valider("consoleEffacementEcranConsole", "BoutonValidationEffacementEcranConsole", "LancementWireshark", "test");
    aide("boutonSolutionEffacementEcranConsole","solutionEffacementEcranConsole");

    valider("consoleLancementWireshark", "BoutonValidationLancementWireshark", "ChoixInterfaceRéseau", "test");
    aide("boutonSolutionLancementWireshark","solutionLancementWireshark");

    //aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider2("BoutonValidationChoixInterfaceRéseau", "Filtrage");

    valider("consoleFiltrage", "BoutonValidationFiltrage", "VueCaptureMachineClient", "test");
    aide("boutonSolutionFiltrage","solutionFiltrage");

    valider2("BoutonValidationVueCaptureMachineClient", "Connexion2Ftp");

    valider("consoleConnexion2Ftp", "BoutonValidationConnexion2Ftp", "Connexion2Utilisateur", "test");
    aide("boutonSolutionConnexion2Ftp","solutionConnexion2Ftp");

    valider("consoleConnexion2Utilisateur","BoutonValidationConnexion2Utilisateur","Connexion2Mdp", "test");
    aide("boutonSolutionConnexion2Utilisateur", "solutionConnexion2Utilisateur");

    valider("consoleConnexion2Mdp","BoutonValidationConnexion2Mdp","DepotFichier", "test");
    aide("boutonSolutionConnexion2Mdp", "solutionConnexion2Mdp");

    valider("consoleDepotFichier","BoutonValidationDepotFichier","ContenuServeur2", "test");
    aide("boutonSolutionDepotFichier", "solutionDepotFichier");

    valider("consoleContenuServeur2","BoutonValidationContenuServeur2","ContenuServeurWeb", "test");
    aide("boutonSolutionContenuServeur2", "solutionContenuServeur2");

    valider2("BoutonValidationContenuServeurWeb","EtudeCaptureWireshark");
}