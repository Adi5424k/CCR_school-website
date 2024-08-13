document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentLocation = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href").includes(currentLocation)) {
            link.classList.add("active");
        }
    });
});
