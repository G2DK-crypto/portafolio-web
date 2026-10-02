// ==============================
// MENÚ RESPONSIVE
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navbarMenu = document.getElementById("navbarMenu");

menuBtn.addEventListener("click", () => {

    navbarMenu.classList.toggle("is-active");

    const isActive = navbarMenu.classList.contains("is-active");

    menuBtn.setAttribute("aria-expanded", isActive);
});


// ==============================
// CERRAR MENÚ AL SELECCIONAR
// ==============================

const navLinks = document.querySelectorAll(".navbar-item");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbarMenu.classList.remove("is-active");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// ==============================
// MENSAJE EN CONSOLA
// ==============================

console.log(
    "Portafolio de Abdiel Torrealba cargado correctamente."
);
