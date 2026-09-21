// PROMO BANNER
const promoBanner = document.getElementById("promo-banner");
const closeBanner = document.getElementById("close-banner");
closeBanner.addEventListener("click", function () {
  promoBanner.remove();
});
// PRODUCT DETAILS
function openProductDetails(productId) {
  window.location.href = `productdetails.html?id=${productId}`;
}
// PRODUCT GRID ELEMENTS
const productGrid = document.getElementById("product-grid");
const topproductGrid = document.getElementById("topproduct-grid");
// NORMAL PRODUCTS
productGrid.innerHTML = products.map(product => {
  return `
    <div 
      class="flex flex-col group relative bg-white p-3 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      data-id="${product.id}"
    >
      <div class="w-full aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-4 mb-4 relative">
        <img 
          src="${product.img}" 
          alt="${product.name}" 
          class="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
        />
      </div>
      <h3 class="text-base sm:text-lg font-bold text-black truncate mb-1 pr-8">
        ${product.name}
      </h3>
      <div class="flex items-center gap-1.5 mb-2">
        <div class="flex items-center gap-0.5">
          ${generateStars(product.star)}
        </div>
        <span class="text-xs sm:text-sm text-black/60 font-normal">
          ${product.star}/<span class="text-black/40">5</span>
        </span>
      </div>
      <div class="text-xl sm:text-2xl font-bold text-black">
        $${product.price}
        <!-- ADD TO CART BUTTON -->
        <button 
          class="cartBtn cursor-pointer absolute bottom-3 right-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 z-10"
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
// NORMAL PRODUCT CLICK
productGrid.addEventListener("click", (e) => {
  // Don't open details if cart button was clicked
  if (e.target.closest(".cartBtn")) {
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
productGrid.addEventListener("click", (e) => {
  const cartButton = e.target.closest(".cartBtn");
  if (!cartButton) {
    return;
  }
  e.stopPropagation();
  const productId = cartButton.dataset.id;
  addToCart(productId);
});
// TOP PRODUCTS
topproductGrid.innerHTML = topProducts.map(product => {
  return `
    <div 
      class="flex flex-col relative group cursor-pointer"
      data-id="${product.id}"
    >
      <div class="w-full aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-4 mb-4">
        <img 
          src="${product.img}" 
          alt="${product.name}" 
          class="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
        />
      </div>
      <h3 class="text-base sm:text-lg font-bold text-black truncate mb-1">
        ${product.name}
      </h3>
      <div class="flex items-center gap-1.5 mb-2">
        <div class="flex items-center gap-0.5">
          ${generateStars(product.star)}
        </div>
        <span class="text-xs sm:text-sm text-black/60 font-normal">
          ${product.star}/<span class="text-black/40">5</span>
        </span>
      </div>
      <div class="text-xl sm:text-2xl font-bold text-black">
        $${product.price}
        <!-- ADD TO CART -->
        <button 
          class="topcartBtn cursor-pointer absolute bottom-3 right-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 z-10"
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
// TOP PRODUCT CLICK + CART 
topproductGrid.addEventListener("click", (e) => {
  // Add to cart
  const cartButton = e.target.closest(".topcartBtn");
  if (cartButton) {
    e.stopPropagation();
    const productId = cartButton.dataset.id;
    addToCart(productId);
    return;
  }
  // Product details
  const productCard = e.target.closest("[data-id]");
  if (!productCard) {
    return;
  }
  const productId = productCard.dataset.id;
  openProductDetails(productId);
});

const allProducts = [...products, ...topProducts, ...alsoLike];