document.addEventListener("DOMContentLoaded", () => {
    let menuicon = document.getElementById("menu-icon");
    let nav = document.getElementById("nav");

    menuicon.addEventListener("click", () => {
        nav.classList.toggle('active');
    });

    let navlinks = document.querySelectorAll(".nav li a");

    navlinks.forEach(element => {
        element.addEventListener("click", () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');

            }
            window.location.href = link.href;
        })
    });
});