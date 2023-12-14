document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("politicaPrivacidad");
    const btnEnviar = document.getElementById("botonEnviar");

    // btnEnviar.addEventListener("click", function() {
    //     if (checkbox.checked) {
    //         // Redirige a la página deseada cuando se hace clic en el botón y el checkbox está marcado
    //         window.location.href = "https://tupagina.com"; // Reemplaza "https://tupagina.com" con la URL que desees
    //     }
    // });

    checkbox.addEventListener("change", function() {
        btnEnviar.disabled = !this.checked;
    });
});
