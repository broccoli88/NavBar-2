const menuOpen = document.querySelector(".menu .fa-solid");
const toggleNav = document.querySelector(".navbar");
const header = document.querySelector("header");

menuOpen.addEventListener("click", () => {
    toggleNav.classList.toggle("nav-active");

    if (toggleNav.classList.contains("nav-active")) {
        header.style.height = "100vh";
    }

    if (!toggleNav.classList.contains("nav-active")) {
        setTimeout(() => {
            header.style.height = "4rem";
        }, 900);
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
        header.style.height = "6rem";
        toggleNav.classList.remove("nav-active");
    }
});
