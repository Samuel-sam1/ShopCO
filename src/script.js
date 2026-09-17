
// Helper function to dynamically generate Tailwind Star SVG strings based on rating value
function generateStars(rating) {
  let starsHtml = '';
  // Loop up to 5 stars total
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full Star SVG
      starsHtml += `<svg class="w-4 h-4 fill-[#FFC633] text-[#FFC633]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    } else if (rating > i - 1 && rating < i) {
      // Half Star SVG
      starsHtml += `<svg class="w-4 h-4 fill-[#FFC633] text-[#FFC633]" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="#FFC633"/><stop offset="50%" stop-color="#E5E7EB"/></linearGradient></defs><path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    } else {
      // Empty Star SVG
      starsHtml += `<svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    }
  }
  return starsHtml;
}

const productGrid = document.getElementById('product-grid');
productGrid.innerHTML = products.map(product => {
  return `
    <div class="flex flex-col group relative bg-white p-3 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300" data-id="${product.id}">
      
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
         <button 
          class="cartBtn cursor-pointer absolute bottom-3 right-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg  hover:bg-black/80 z-10"
          data-id="${product.id}"
          title="Add to Cart"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
}).join('');
document.addEventListener("click", (e) => {
  const cartButton = e.target.closest(".cartBtn, .topcartBtn");

  if (!cartButton) return;

  const productId = cartButton.dataset.id;

  addToCart(productId);
});


const topproductGrid = document.getElementById('topproduct-grid');
topproductGrid.innerHTML = topProducts.map(product => {
  return `
    <div class="flex flex-col relative group cursor-pointer" data-id="${product.id}">
      <!-- Product Image Wrapper -->
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
         <button 
          class="topcartBtn cursor-pointer absolute bottom-3 right-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg  hover:bg-black/80 z-10"
          data-id="${product.id}"
          title="Add to Cart"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
      </div>
      
    </div>
  `;
}).join(''); 



