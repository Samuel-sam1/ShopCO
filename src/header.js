const header = document.getElementById("header"); 
 header.innerHTML = `
 <header >
 <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 lg:gap-10">
      <div class="flex items-center gap-4">
<div class="lg:hidden">
  <button id="hamburger" type="button" class="text-black hover:text-gray-600 cursor-pointer block" aria-label="Open menu"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  </button>
</div>
<div
  id="mobile-menu"
  class="fixed top-0 left-0 z-50 h-screen w-[80%] max-w-[320px] bg-white px-6 py-6 shadow-2xl -translate-x-full transition-transform duration-300 lg:hidden"
>
  <div class="flex items-center justify-between mb-8">
    <a href="index.html" class="text-2xl font-black">
      SHOP.CO
    </a>
    <button id="close-menu" type="button" class="text-2xl"
    >
      ×
    </button>
  </div>
  <nav class="flex flex-col gap-6 text-base font-medium">
    <a href="#" class="flex items-center justify-between hover:text-black/60">
      Shop
    </a>
    <a href="#sale" class="hover:text-black/60">
      On Sale
    </a>
    <a href="#new-arrivals" class="hover:text-black/60">
      New Arrivals
    </a>
    <a href="#brands" class="hover:text-black/60">
      Brands
    </a>
  </nav>
  <div class="border-t border-black/10 mt-10 mb-10 "></div>
  <div class="flex flex-col gap-5 ">
    <a href="cart.html" class="flex items-center gap-3 font-medium ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path
          stroke-linecap="round" stroke-linejoin="round"
          d="M2.25 2.25h1.386c.51 0 .955.343 1.085.836l.383 1.437m0 0L6.75 11.25h10.5l1.5-6.727H5.104ZM6.75 15.75h10.5M8.25 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm9 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
      </svg>
      Cart
    </a>
  <a href="#" class="flex items-center gap-3 font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"/></svg>Account
    </a>
  </div>
</div>
        <a href="index.html" class=" text-2xl sm:text-3xl font-extrabold tracking-tighter text-black">
          SHOP.CO
        </a>
      </div>
      <nav class=" hidden lg:flex items-center gap-6 text-base text-black whitespace-nowrap">
        <div class="relative group">
         <a href="category.html">
          <button class="  flex  items-center  gap-1  hover:text-gray-600  transition-colors  py-2">
            Shop
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
              stroke="currentColor" class=" w-3 h-3 pt-0.5 group-hover:rotate-180 transition-transform duration-200">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          </a>
         
        </div>
        <a href="#topproduct-grid" class="hover:text-gray-600 transition-colors">
          On Sale
        </a>
        <a href="#product-grid" class="hover:text-gray-600 transition-colors">
          New Arrivals
        </a>
        <a href="#" class="hover:text-gray-600 transition-colors">
          Brands
        </a>
      </nav>
      <div class=" hidden md:flex flex-1 max-w-xl relative items-center">
        <span class=" absolute left-4 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
          </svg>
        </span>
       <input id="search-input" type="text" placeholder="Search for products..." class="w-full bg-gray-100 text-sm text-black pl-12 pr-4 py-3 rounded-full outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400 transition-all"/>
       <div id="search-results" class="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hidden z-50"></div>
      </div>
      <div class=" flex items-center gap-3 sm:gap-4 text-black">
        <button class=" md:hidden p-1 hover:text-gray-600" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
          </svg>
        </button>
        <a id="cartBtn" href="cart.html" class=" p-1 hover:text-gray-600 relative " aria-label="Shopping Cart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1-1.5 0Z" />
          </svg>
          <span id="cart-count" class="  hidden  absolute  -top-2  -right-3  bg-black  text-white  text-xs  pl-1  w-5  h-5  rounded-full  items-center  justify-center">0</span>
        </a>
        <a href="#" class=" p-1 hover:text-gray-600" aria-label="Account">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </a>
      </div>
    </div>
  </header>
    `
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
hamburger.addEventListener("click", () => {
  menu.classList.remove("-translate-x-full");
});
closeMenu.addEventListener("click", () => {
  menu.classList.add("-translate-x-full");
});
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

const searchProducts = [
  ...products,
  ...topProducts,
  ...alsoLike
];

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.trim().toLowerCase();
  // If search box is empty
  if (searchValue === "") {
    searchResults.innerHTML = "";
    searchResults.classList.add("hidden");
    return;
  }
  // Find matching products
  const matchingProducts = searchProducts.filter(product =>
    product.name.toLowerCase().includes(searchValue)
  );
  // No products found
  if (matchingProducts.length === 0) {
    searchResults.innerHTML = `
      <div class="p-5 text-center text-gray-500">
        No products found
      </div>
    `;
    searchResults.classList.remove("hidden");
    return;
  }
  // Show products
  searchResults.innerHTML = matchingProducts
    .slice(0, 6)
    .map(product => `
      <div
        class="search-product flex items-center gap-4 p-3 hover:bg-gray-100 cursor-pointer transition"
        data-id="${product.id}"
      >
        <div class="w-14 h-14 bg-[#F0EEED] rounded-xl flex items-center justify-center overflow-hidden">
          <img
            src="${product.img}"
            alt="${product.name}"
            class="w-full h-full object-contain"
          />
        </div>
        <div class="flex-1">
          <h3 class="font-semibold text-sm">
            ${product.name}
          </h3>
          <p class="text-sm text-gray-500">
            $${product.price}
          </p>
        </div>
      </div>
    `)
    .join("");
  searchResults.classList.remove("hidden");
});
searchResults.addEventListener("click", (e) => {
  const product = e.target.closest(".search-product");
  if (!product) return;
  const productId = product.dataset.id;
  window.location.href = `productdetails.html?id=${productId}`;
});

//  <div class=" absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-xl border border-gray-100 p-4 min-w-40">
//             <a href="#" class=" block px-2 py-1.5 text-sm hover:bg-gray-50 rounded-md ">
//               Men's Apparel
//             </a>
//             <a href="#" class=" block px-2 py-1.5 text-sm hover:bg-gray-50 rounded-md">
//               Women's Apparel
//             </a>
//             <a href="#" class=" block px-2 py-1.5 text-sm hover:bg-gray-50 rounded-md ">
//               New Arrivals
//             </a>
//           </div>