// GET PRODUCT ID FROM URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
// COMBINE BOTH PRODUCT ARRAYS
const allProducts = [
  ...products,
  ...topProducts,
  ...alsoLike
];
// FIND THE CLICKED PRODUCT
const product = allProducts.find(
  item => String(item.id) === String(productId)
);
// PRODUCT DETAILS CONTAINER
const productDetailsContainer = document.getElementById("product-details");
// CHECK IF PRODUCT EXISTS
if (!product) {
  productDetailsContainer.innerHTML = `
    <div class="col-span-full text-center py-20">
      <h1 class="text-3xl font-bold mb-4">
        Product Not Found
      </h1>
      <p class="text-black/60 mb-6">
        We couldn't find this product.
      </p>
      <a
        href="index.html"
        class="inline-flex bg-black text-white px-6 py-3 rounded-full"
      >
        Back to Shop
      </a>
    </div>
  `;
} else {
  showProduct(product);
}
// SHOW PRODUCT
function showProduct(product) {
  // Change browser title
  document.title = `${product.name} | SHOP.CO`;
  // Change breadcrumb
  const breadcrumb =
    document.getElementById("breadcrumb-product");
  if (breadcrumb) {
    breadcrumb.textContent = product.name;
  }
  const tabDescription = document.getElementById("tab-product-description");

if (tabDescription) {
  tabDescription.textContent = product.description;
}
  // Render product
  productDetailsContainer.innerHTML = `
    <!-- LEFT SIDE -->
    <div>
      <div class="w-full aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-6">
        <img
          src="${product.img}"
          alt="${product.name}"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
    <!-- RIGHT SIDE -->
    <div class="flex flex-col">
      <!-- PRODUCT NAME -->
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight">
        ${product.name}
      </h1>
      <!-- RATING -->
      <div class="flex items-center gap-2 mt-4">
        <div class="flex items-center gap-1">
          ${generateStars(product.star)}
        </div>
        <span class="text-sm text-black/60">
          ${product.star}/5
        </span>
      </div>
      <!-- PRICE -->
      <p class="text-3xl sm:text-4xl mb-4 font-bold mt-5">
        $${Number(product.price).toFixed(2)}
      </p>
      <div class="border-t border-black/10 my-6"></div>
      <!-- DESCRIPTION -->
      <div>
        <h2 class="font-bold text-lg mb-2">
          Description
        </h2>
        <p class="text-black/60 mb-4 leading-relaxed">
          ${product.description || "This product is designed with quality, comfort and style in mind."}
        </p>
      </div>
      <div class="border-t border-black/10 my-6"></div>
      <!-- QUANTITY + CART -->
      <div class="flex gap-3">
        <!-- QUANTITY -->
        <div class="flex items-center mt-6 bg-[#F0EEED] rounded-full px-2">
          <button
            id="detail-minus"
            type="button"
            class="w-10 h-10  rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            −
          </button>
          <span
            id="detail-quantity"
            class="w-8 text-center font-medium"
          >
            1
          </span>
          <button
            id="detail-plus"
            type="button"
            class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            +
          </button>
        </div>
        <!-- ADD TO CART -->
        <button
          id="detail-add-cart"
          type="button"
          class="flex-1 bg-black mt-6  text-white rounded-full py-3 px-6 font-medium hover:bg-black/80 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  `;
  setupProductButtons(product);
}
// BUTTONS
function setupProductButtons(product) {
  let quantity = 1;
  const quantityElement =
    document.getElementById("detail-quantity");
  const plusButton =
    document.getElementById("detail-plus");
  const minusButton =
    document.getElementById("detail-minus");
  const addCartButton =
    document.getElementById("detail-add-cart");
  // PLUS
  plusButton.addEventListener("click", () => {
    quantity++;
    quantityElement.textContent =
      quantity;
  });
  // MINUS
  minusButton.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent =
        quantity;
    }
  });
  // ADD TO CART
  addCartButton.addEventListener("click", () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product.id);
    }
    addCartButton.textContent =
      "Added to Cart ✓";
    setTimeout(() => {
      addCartButton.textContent =
        "Add to Cart";
    }, 1500);
  });
}
const detailsTab = document.getElementById("details-tab");
const reviewsTab = document.getElementById("reviews-tab");
const faqTab = document.getElementById("faq-tab");
const detailsContent = document.getElementById("details-content");
const reviewsContent = document.getElementById("reviews-content");
const faqContent = document.getElementById("faq-content");
function showTab(activeTab, activeContent) {
  detailsContent.classList.add("hidden");
  reviewsContent.classList.add("hidden");
  faqContent.classList.add("hidden");
  detailsTab.classList.remove("border-black", "text-black");
  reviewsTab.classList.remove("border-black", "text-black");
  faqTab.classList.remove("border-black", "text-black");
  detailsTab.classList.add("border-transparent", "text-black/50");
  reviewsTab.classList.add("border-transparent", "text-black/50");
  faqTab.classList.add("border-transparent", "text-black/50");
  activeContent.classList.remove("hidden");
  activeTab.classList.remove("border-transparent", "text-black/50");
  activeTab.classList.add("border-black", "text-black");
}
detailsTab.addEventListener("click", () => {
  showTab(detailsTab, detailsContent);
});
reviewsTab.addEventListener("click", () => {
  showTab(reviewsTab, reviewsContent);
});
faqTab.addEventListener("click", () => {
  showTab(faqTab, faqContent);
});

const productLike = document.getElementById("product-like");
// NORMAL PRODUCTS
productLike.innerHTML = alsoLike.map(product => {
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
          class="likcartBtn cursor-pointer absolute bottom-3 right-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 z-10"
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
productLike.addEventListener("click", (e) => {
  // Add to cart
  const cartButton = e.target.closest(".likcartBtn");
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