const OPEN_CLASSNAME = "active";

const navLinks = document.getElementById("links_nav");
const headerBurger = document.getElementById("header_burger");
const body = document.getElementById("body");

function toggleMenu() {
    navLinks.classList.toggle(OPEN_CLASSNAME);
    headerBurger.classList.toggle(OPEN_CLASSNAME);
    body.classList.toggle("locke");
}