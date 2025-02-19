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
  
  // Close search when clicking outside
  // document.addEventListener("click", function (event) {
  //     let searchContainer = document.querySelector(".search-container");
  //     let searchInput = document.getElementById("searchInput");
  
  //     if (!searchContainer.contains(event.target)) {
  //         searchInput.classList.remove("active");
  //     }
  // });
  
  ////////// carasoul
  
  document.addEventListener("DOMContentLoaded", () => {
    const productVariants = [
      {
        color: "#f4f6f7",
        images: [
          "/static/images/signature/img2.1.jpg",
          "/static/images/signature/img2.2.jpg",
          "/static/images/signature/img2.3.jpg",
        ],
      },
      {
        color: "#FFD700",
        images: [
          "/images/image411.jpg",
          "/images/image412.jpg",
          "/images/image413.jpg",
        ],
      },
    ];
  
    let currentVariantIndex = 0;
    let currentImageIndex = 0;
  
    const imageElement = document.getElementById("productImage");
    const dots = document.querySelectorAll(".dot");
  
    function updateImage() {
      const newImage = productVariants[currentVariantIndex].images[currentImageIndex];
  
      // Preserve dimensions by updating only the src
      imageElement.setAttribute("src", newImage);
  }
  
  
    function changeImage(direction) {
      const images = productVariants[currentVariantIndex].images;
      currentImageIndex =
        (currentImageIndex + direction + images.length) % images.length;
      updateImage();
    }
  
    function changeVariant(index) {
      currentVariantIndex = index;
      currentImageIndex = 0;
      updateImage();
  
      dots.forEach((dot, i) => {
        dot.classList.remove("active");
        dot.innerHTML = ""; // Remove any existing checkmark
        dot.style.backgroundColor = productVariants[i].color;
      });
  
      dots[index].classList.add("active");
      dots[index].innerHTML = `<i class="fa-solid fa-check"></i>`; // Add checkmark icon
    }
  
    dots.forEach((dot, i) => {
      dot.style.backgroundColor = productVariants[i].color;
      dot.addEventListener("click", () => changeVariant(i));
    });
  
    window.prevImage = () => changeImage(-1);
    window.nextImage = () => changeImage(1);
    window.changeColorVariant = changeVariant;
  
    updateImage();
    changeVariant(0); // Initialize first active dot with checkmark
  });
  