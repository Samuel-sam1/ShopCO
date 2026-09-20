const CART_KEY = "shoppingCart";
function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function addToCart(productId) {
const cart = getCart();
const allProducts = [...products, ...topProducts, ...alsoLike];
const product = allProducts.find(
  product => String(product.id) === String(productId)
);
  if (!product) {
    console.error("Product not found:", productId);
    alert("No Product")
    return;
  }
  const existingProduct = cart.find(
    item => String(item.id) === String(productId)
  );
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  saveCart(cart);
  updateCartCount();
  console.log("Cart:", cart);
}
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(
    product => String(product.id) !== String(productId)
  );
  saveCart(cart);
  renderCart();
  updateCartCount();
}
function increaseQuantity(productId) {
  const cart = getCart();
  const product = cart.find(
    item => String(item.id) === String(productId)
  );
  if (product) {
    product.quantity += 1;
  }
  saveCart(cart);
  renderCart();
  updateCartCount();
}
function decreaseQuantity(productId) {
  const cart = getCart();
  const product = cart.find(
    item => String(item.id) === String(productId)
  );
  if (product) {
    product.quantity -= 1;
    if (product.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
  }
  saveCart(cart);
  renderCart();
  updateCartCount();
}
function calculateTotals(cart) {
  const subtotal = cart.reduce(
    (total, product) => total + Number(product.price) * product.quantity,
    0
  );
  return {
    subtotal,
    total: subtotal + 15
  };
}
function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;
  const cart = getCart();
  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="text-center py-16">
        <h2 class="text-2xl font-bold text-black mb-2">
          Your cart is empty
        </h2>
        <p class="text-black/60 mb-6">
          Looks like you haven't added anything yet.
        </p>
        <a 
          href="index.html"
          class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition"
        >
          Continue Shopping
        </a>
      </div>
    `;
    updateCartSummary([]);
    return;
  }
  cartContainer.innerHTML = cart.map(product => `
    <div 
      class="flex gap-4 py-5 border-b border-black/10"
      data-id="${product.id}"
    >
      <div class="w-24 h-24 sm:w-32 sm:h-32 bg-[#F0EEED] rounded-xl overflow-hidden shrink-0">
        <img
          src="${product.img}"
          alt="${product.name}"
          class="w-full h-full object-contain p-3"
        />
      </div>
      <div class="flex flex-col flex-1 min-w-0">
        <div class="flex justify-between gap-3">
          <div>
            <h3 class="font-bold text-base sm:text-lg truncate">
              ${product.name}
            </h3>
            <p class="text-sm text-black/50 mt-1">
              $${Number(product.price).toFixed(2)}
            </p>
          </div>
          <button
            onclick="removeFromCart('${product.id}')"
            class="text-black/40 hover:text-red-500 transition text-4xl"
            title="Remove"
          >
            ×
          </button>
        </div>
        <div class="flex items-center justify-between mt-auto pt-4">
          <div class="flex items-center bg-[#F0EEED] rounded-full">
            <button
              onclick="decreaseQuantity('${product.id}')"
              class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition"
            >
              −
            </button>
            <span class="w-8 text-center font-medium">
              ${product.quantity}
            </span>
            <button
              onclick="increaseQuantity('${product.id}')"
              class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition"
            >
              +
            </button>
          </div>
          <p class="font-bold text-lg">
            $${(Number(product.price) * product.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  `).join("");
  updateCartSummary(cart);
}
function updateCartSummary(cart) {
  const subtotalElement = document.getElementById("cart-subtotal");
  const totalElement = document.getElementById("cart-total");
  if (!subtotalElement || !totalElement) return;
  const { subtotal, total } = calculateTotals(cart);
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = count;
    cartCount.classList.toggle("hidden", count === 0);
  }
}   
