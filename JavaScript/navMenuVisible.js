const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")

    if(navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Abrir Menú")
    } else {
        navToggle.setAttribute("aria-label", "Cerrar Menú")
    };
})
