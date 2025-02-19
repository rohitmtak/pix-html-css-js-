function openSizeChart() {
    document.getElementById("sizeChart").style.right = "0";
    document.querySelector(".size-chart-overlay").style.display = "block";
}

function closeSizeChart() {
    document.getElementById("sizeChart").style.right = "-50%";
    document.querySelector(".size-chart-overlay").style.display = "none";
}

// // Close when clicking outside the pop-up
// document.querySelector(".size-chart-overlay").addEventListener("click", function () {
//     closeSizeChart();
// });


document.addEventListener("DOMContentLoaded", () => {
    const productVariants = [
      {
        color: "#f4f6f7",
        images: [
          "/static/images/signature/product-display/img1.1.jpg",
          "/static/images/signature/product-display/img2.2.jpg",
          "/static/images/signature/product-display/img3.3.jpg",
        ],
      },
      {
        color: "#FFD700",
        images: [
          "/static/images/signature/product-display/img1.jpg",
          "/static/images/signature/product-display/img2.jpg",
          "/static/images/signature/product-display/img3.jpg",
        ],
      },
    ];

    let currentVariantIndex = 0; // Tracks the current color variant
    let currentImageIndex = 0;   // Tracks the current image within the variant

    const imageElement = document.querySelector(".product-image img");
    const colors = document.querySelectorAll(".color");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    // Function to update the image
    function updateImage() {
      const newImageSrc = productVariants[currentVariantIndex].images[currentImageIndex];
  
      // Update only the image src without modifying its dimensions
      imageElement.src = newImageSrc;
  }
  
    // Function to change images using arrow buttons
    function changeImage(direction) {
        const images = productVariants[currentVariantIndex].images;
        currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
        updateImage();
    }

    // Function to change product variant when clicking on a color
    function changeVariant(index) {
        if (currentVariantIndex !== index) {
            currentVariantIndex = index;
            currentImageIndex = 0;  // Reset image index for the new variant
            updateImage();

            // Remove checkmark from all colors
            colors.forEach(color => color.innerHTML = "");
            
            // Add checkmark to the selected color
            colors[index].innerHTML = `<i class="fa-solid fa-check"></i>`;
        }
    }

    // Attach event listeners for image navigation
    prevBtn.addEventListener("click", () => changeImage(-1));
    nextBtn.addEventListener("click", () => changeImage(1));

    // Attach event listeners for color selection
    colors.forEach((color, i) => {
        color.addEventListener("click", () => changeVariant(i));
    });

    // Initialize first image & active color
    updateImage();
});
