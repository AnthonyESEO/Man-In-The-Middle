
function valider(idInputDepart, idBoutonDepart, idConteneurDestination, reponse) {
    var inputDepart = document.getElementById(idInputDepart);
    var boutonDepart = document.getElementById(idBoutonDepart);
    var elementSuivant = document.getElementById(idConteneurDestination);

    boutonDepart.addEventListener("click",function () {
        if (inputDepart.valueOf().value==reponse){
            elementSuivant.setAttribute("style","");
        }
        else{
            console.log("FAUX");
            var div=document.createElement('div');
            div.setAttribute("class", "alert alert-danger alert-dismissible fade show");

            var strong = document.createElement("strong");
            strong.textContent = "INCORRECT";

            var button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class","close");
            button.setAttribute("data-dismiss", "alert");
            button.setAttribute("aria-label", "Close");

            div.appendChild(strong);
            div.appendChild(button);
            inputDepart.parentElement.insertBefore(div, null);
            setTimeout(function(){div.remove()},3000);
        }
    });

    inputDepart.addEventListener("keypress", function (e) {
        if(e.keyCode == 13){
            boutonDepart.click();
        }
    });

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

    valider2("commencer","ConnexionFtp");

    valider("consoleConnexionFtp", "BoutonValidationConnexionFtp", "ConnexionUtilisateur", "ftp 192.168.4.206");
    aide("boutonSolutionConnexionFtp","solutionConnexionFtp");

    valider("consoleConnexionUtilisateur", "BoutonValidationConnexionUtilisateur", "ConnexionMdp", "ftp");
    aide("boutonSolutionConnexionUtilisateur","solutionConnexionUtilisateur");

    valider("consoleConnexionMdp", "BoutonValidationConnexionMdp", "ContenuServeur", "motdepasse");
    aide("boutonSolutionConnexionMdp","solutionConnexionMdp");

    valider("consoleContenuServeur", "BoutonValidationContenuServeur", "Deconnexion", "ls");
    aide("boutonSolutionContenuServeur","solutionContenuServeur");

    valider("consoleDeconnexion", "BoutonValidationDeconnexion", "DeplacementDossier", "bye");
    aide("boutonSolutionDeconnexion","solutionDeconnexion");

    valider("consoleDeplacementDossier", "BoutonValidationDeplacementDossier", "CreationFichier", "cd Documents");
    aide("boutonSolutionDeplacementDossier","solutionDeplacementDossier");

    valider("consoleCreationFichier", "BoutonValidationCreationFichier", "VisualisationCommandeEcritureFichier", "echo texte dans le fichier de transfert > fichier.txt");
    aide("boutonSolutionCreationFichier","solutionCreationFichier");

    valider2("BoutonValidationVisualisationCommandeEcritureFichier","ConnexionAdminMachineCapture");

    valider("consoleConnexionAdminMachineCapture", "BoutonValidationConnexionAdminMachineCapture", "EffacementEcranConsole", "sudo su");
    aide("boutonSolutionConnexionAdminMachineCapture","solutionConnexionAdminMachineCapture");

    valider("consoleEffacementEcranConsole", "BoutonValidationEffacementEcranConsole", "LancementWireshark", "clear");
    aide("boutonSolutionEffacementEcranConsole","solutionEffacementEcranConsole");

    valider("consoleLancementWireshark", "BoutonValidationLancementWireshark", "ChoixInterfaceRéseau", "wireshark");
    aide("boutonSolutionLancementWireshark","solutionLancementWireshark");

    valider2("BoutonValidationChoixInterfaceRéseau", "Filtrage");

    valider("consoleFiltrage", "BoutonValidationFiltrage", "VueCaptureMachineClient", "ip.addr == 192.168.4.204");
    aide("boutonSolutionFiltrage","solutionFiltrage");

    valider2("BoutonValidationVueCaptureMachineClient", "Connexion2Ftp");

    valider("consoleConnexion2Ftp", "BoutonValidationConnexion2Ftp", "Connexion2Utilisateur", "ftp 192.168.4.206");
    aide("boutonSolutionConnexion2Ftp","solutionConnexion2Ftp");

    valider("consoleConnexion2Utilisateur","BoutonValidationConnexion2Utilisateur","Connexion2Mdp", "ftp");
    aide("boutonSolutionConnexion2Utilisateur", "solutionConnexion2Utilisateur");

    valider("consoleConnexion2Mdp","BoutonValidationConnexion2Mdp","DepotFichier", "motdepasse");
    aide("boutonSolutionConnexion2Mdp", "solutionConnexion2Mdp");

    valider("consoleDepotFichier","BoutonValidationDepotFichier","ContenuServeur2", "put transfert.txt");
    aide("boutonSolutionDepotFichier", "solutionDepotFichier");

    valider("consoleContenuServeur2","BoutonValidationContenuServeur2","ContenuServeurWeb", "ls");
    aide("boutonSolutionContenuServeur2", "solutionContenuServeur2");

    valider2("BoutonValidationContenuServeurWeb","EtudeCaptureWireshark");

    valider2("BoutonValidationEtudeCaptureWireshark","Solution");

};