window.addEventListener("load", function() {
    
    // Seleciona a tela de boas-vindas
    const welcomeScreen = document.getElementById("welcome-screen");

    // Espera 3 segundos (3000ms) e adiciona a classe que faz sumir
    setTimeout(function() {
        welcomeScreen.classList.add("sumir");
    }, 3000); 

});
