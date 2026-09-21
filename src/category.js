const categoryGrid = document.getElementById("category-product-grid");
// Combine the 3 arrays here
const allProducts = [
  ...products,
  ...topProducts,
  ...alsoLike
];
const productId = new URLSearchParams(window.location.search).get("id");
const product = allProducts.find(
  item => String(item.id) === String(productId)
);
categoryGrid.innerHTML = allProducts.map(product => {
  return `
    <div
      class="relative flex flex-col cursor-pointer group"
      data-id="${product.id}"
    >
      <!-- PRODUCT IMAGE -->
      <div
        class="w-full aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-4 mb-4"
      >
        <img
          src="${product.img}"
          alt="${product.name}"
          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        >
      </div>
      <!-- PRODUCT NAME -->
      <h3 class="text-base sm:text-lg font-bold">
        ${product.name}
      </h3>
      <!-- RATING -->
      <div class="flex items-center gap-2 mt-2">
        <div class="flex">
          ${generateStars(product.star)}
        </div>
        <span class="text-xs sm:text-sm text-black/60">
          ${product.star}/5
        </span>
      </div>
      <!-- PRICE -->
      <div class="relative mt-2 pb-12">
        <p class="text-xl sm:text-2xl font-bold text-black">
          $${product.price}
        </p>
        <!-- ADD TO CART -->
        <button
          class="categoryCartBtn cursor-pointer absolute bottom-0 right-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 z-10"
          data-id="${product.id}"
          type="button"
          title="Add to Cart"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </div>

    </div>
  `;
}).join("");
categoryGrid.addEventListener("click", (e) => {
  // Don't open details if cart button was clicked
  if (e.target.closest(".categoryCartBtn")) {
    return;
  }
  const productCard = e.target.closest("[data-id]");
  if (!productCard) {
    return;
  }
  const productId = productCard.dataset.id;
  openProductDetails(productId);
});
// NORMAL PRODUCT ADD TO CART
categoryGrid.addEventListener("click", (e) => {
  const cartButton = e.target.closest(".categoryCartBtn");
  if (!cartButton) {
    return;
  }
  e.stopPropagation();
  const productId = cartButton.dataset.id;
  addToCart(productId);
});