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
// LIGHTBOX PARA IMÁGENES
// ==============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");
const projectImages = document.querySelectorAll(".project-image img");

// Abrir lightbox al hacer clic en imagen
projectImages.forEach(img => {
    img.addEventListener("click", function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
    });
});

// Cerrar lightbox con el botón X
lightboxClose.addEventListener("click", function() {
    lightbox.style.display = "none";
});

// Cerrar lightbox al hacer clic fuera de la imagen
lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Cerrar lightbox con tecla ESC
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && lightbox.style.display === "block") {
        lightbox.style.display = "none";
    }
});


// ==============================
// MENSAJE EN CONSOLA
// ==============================

console.log(
    "Portafolio de Abdiel Torrealba cargado correctamente."
);
