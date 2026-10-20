
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");

    menuIcon.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuIcon.setAttribute("aria-expanded", isOpen);
        menuIcon.setAttribute(
            "aria-label",
            isOpen ? "Dong menu" : "Mo menu"
        );

        menuIcon.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", "false");
            menuIcon.setAttribute("aria-label", "Mo menu");
            menuIcon.textContent = "☰";
        });
    });
});
