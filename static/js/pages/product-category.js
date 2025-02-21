// Filter pop up
function openFilter() {
  document.getElementById("filter").style.right = "0";
}

function closeFilter() {
  document.getElementById("filter").style.right = "-50%";
}


// Select the slider and price span
const priceSlider = document.getElementById("priceRange");
const minPrice = document.getElementById("minPrice");

// Update price on slider change
priceSlider.addEventListener("input", function () {
  minPrice.textContent = new Intl.NumberFormat('en-IN').format(priceSlider.value);
});


///////////////////////////////////////////////////////
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

// // Close search when clicking outside
// document.addEventListener("click", function (event) {
//     let searchContainer = document.querySelector(".search-container");
//     let searchInput = document.getElementById("searchInput");

//     if (!searchContainer.contains(event.target)) {
//         searchInput.classList.remove("active");
//     }
// });

////////// Carousel with Redirection Feature
document.addEventListener("DOMContentLoaded", () => {
  const productVariants = [
      {
          color: "#f4f6f7",
          images: [
              "/static/images/signature/img2.1.jpg",
              "/static/images/signature/img2.3.jpg",
              "/static/images/signature/img2.4.jpg",
          ],
          url: "/templates/product/product.html?variant=1",
      },
      {
          color: "#FFD700",
          images: [
              "/static/images/signature/img2.22.jpg",
              "/static/images/signature/img2.33.jpg",
              "/static/images/signature/img2.44.jpg",
          ],
          url: "/templates/product/product.html?variant=2",
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
      currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
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

  // ✅ New Feature: Redirect to `product-display.html` when clicking the image
  imageElement.addEventListener("click", () => {
      const productURL = productVariants[currentVariantIndex].url; // Get the URL of the selected variant
      window.location.href = productURL; // Redirect to the corresponding product details page
  });

  window.prevImage = () => changeImage(-1);
  window.nextImage = () => changeImage(1);
  window.changeColorVariant = changeVariant;

  updateImage();
  changeVariant(0); // Initialize first active dot with checkmark
});

