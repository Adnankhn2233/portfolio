// document.addEventListener("DOMContentLoaded", function () {
//     const navbar = document.querySelector(".navbar");

//     function toggleHeaderTransparency() {
//         if (window.scrollY > 0) {
//             navbar.classList.add("Transparent");
//         } else {
//             navbar.classList.remove("Transparent");
//         }
//     }

//     window.addEventListener("scroll", toggleHeaderTransparency);
// }); 

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    function toggleNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.remove("Transparent");
        } else {
            navbar.classList.add("Transparent");
        }
    }

    // Run once when the page loads
    toggleNavbar();

    // Update on scroll
    window.addEventListener("scroll", toggleNavbar);
});