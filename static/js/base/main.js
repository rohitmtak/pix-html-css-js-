/////// Toggle Burger Menu Functionality

function toggleMenu() {
    const menuOverlay = document.getElementById("menuOverlay");
    const menuButton = document.getElementById("menuButton");
    const menuIcon = document.getElementById("menuIcon");
    const searchBox = document.querySelector(".search__box");
    const navbarRight = document.querySelector(".navbar__right");

    menuOverlay.classList.toggle("active");
    menuButton.classList.toggle("active");

    if (menuOverlay.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-times"); 
    } else {
        menuIcon.classList.replace("fa-times", "fa-bars"); 
    }

    // Hide/show navbar icons when menu is active
    searchBox.classList.toggle("hidden");
    navbarRight.classList.toggle("hidden");
}

// function toggleMenu() {
//     const menuOverlay = document.getElementById("menuOverlay");
//     const menuButton = document.getElementById("menuButton");
//     const menuIcon = document.getElementById("menuIcon");

//     menuOverlay.classList.toggle("active");
//     menuButton.classList.toggle("active");

//     if (menuOverlay.classList.contains("active")) {
//         menuIcon.classList.replace("fa-bars", "fa-times"); 
//     } else {
//         menuIcon.classList.replace("fa-times", "fa-bars"); 
//     }
//}

// /////// Toggle Burger Menu Functionality
// function toggleMenu() {
//     const menuOverlay = document.getElementById("menuOverlay"); // Ensure this exists in your HTML
//     const menuButton = document.getElementById("menuButton");
//     const menuIcon = document.getElementById("menuIcon");
//     const navbarLeft = document.querySelector(".navbar__left");
//     const navbarRight = document.querySelector(".navbar__right");

//     // Toggle active class on menu overlay and button
//     menuOverlay.classList.toggle("active");
//     menuButton.classList.toggle("active");

//     // Change menu icon (burger <-> close)
//     if (menuOverlay.classList.contains("active")) {
//         menuIcon.classList.replace("fa-bars", "fa-times"); 
//     } else {
//         menuIcon.classList.replace("fa-times", "fa-bars"); 
//     }

//     // Hide/show navbar icons when menu is active
//     navbarLeft.classList.toggle("hidden");
//     navbarRight.classList.toggle("hidden");
// }

// // Attach the function to the menu button
// document.getElementById("menuButton").addEventListener("click", toggleMenu);






/////// Search box input functionality
function toggleSearch() {
    let searchInput = document.getElementById("searchInput");

    if (searchInput.classList.contains("active")) {
        searchInput.classList.remove("active");
    } else {
        searchInput.classList.add("active");
        searchInput.focus();
    }
}

/////// Close search when clicking outside
// document.addEventListener("click", function (event) {
//     let searchContainer = document.querySelector(".search-container");
//     let searchInput = document.getElementById("searchInput");

//     if (!searchContainer.contains(event.target)) {
//         searchInput.classList.remove("active");
//     }
// });