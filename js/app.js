document.addEventListener("DOMContentLoaded", function() {
    
    var botonMenu = document.getElementById("btn-mobile");
    var menuNavegacion = document.getElementById("menu-principal");
    var enlacesMenu = menuNavegacion.getElementsByClassName("link");

    // Abrir/Cerrar menú hamburguesa
    if (botonMenu && menuNavegacion) {
        botonMenu.addEventListener("click", function(evento) {
            evento.preventDefault();
            menuNavegacion.classList.toggle("mostrar");
            
            // Actualizar atributo de accesibilidad
            var estaAbierto = menuNavegacion.classList.contains("mostrar");
            botonMenu.setAttribute("aria-expanded", estaAbierto);
        });
    }

    // Cerrar el menú automáticamente al hacer clic en un enlace interno
    for (var i = 0; i < enlacesMenu.length; i++) {
        enlacesMenu[i].addEventListener("click", function() {
            menuNavegacion.classList.remove("mostrar");
            botonMenu.setAttribute("aria-expanded", "false");
        });
    }
});