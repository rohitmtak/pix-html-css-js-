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