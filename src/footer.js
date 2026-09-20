const footer = document.getElementById("footer");

footer.innerHTML = `
    <div class="w-full bg-white pt-12">
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 -mb-24 sm:-mb-32 md:-mb-20">
        <div class="w-full bg-black rounded-[20px] px-6 py-9 md:p-16">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="max-w-xl mx-auto lg:mx-0">
              <h2
                class="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-white leading-tight uppercase text-left">
                STAY UP TO DATE ABOUT OUR LATEST OFFERS
              </h2>
            </div>
            <form class="flex flex-col gap-3 max-w-sm w-full mx-auto lg:mx-0 lg:ml-auto"
              onsubmit="event.preventDefault();">
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-black/40">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
                <input type="email" placeholder="Enter your email address" required
                  class="w-full bg-white text-black pl-12 pr-4 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-normal placeholder:text-black/40 outline-none focus:ring-2 focus:ring-white/20 transition-all" />
              </div>
              <button type="submit"
                class="w-full bg-white text-black py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-white/90 transition-all duration-200 text-center">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer class="w-full bg-[#F0F0F0] pt-36 sm:pt-40 md:pt-25 pb-1 relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-black/10">
            <div class="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-4 sm:gap-6 mb-4 lg:mb-0">
              <a href="#" class="text-3xl font-black text-black tracking-tight uppercase select-none">
                SHOP.CO
              </a>
              <p class="text-sm text-black/60 font-normal leading-relaxed max-w-sm">
                We have clothes that suit your style and which you're proud to wear. From premium denim to essential
                basic tees.
              </p>
              <div class="flex items-center gap-3">
                <a href="#"
                  class="w-7 h-7 rounded-full border border-black/10 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-200">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#"
                  class="w-7 h-7 rounded-full border border-black/10 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-200">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#"
                  class="w-7 h-7 rounded-full border border-black/10 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-200">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-span-1 flex flex-col gap-3 sm:gap-4">
              <h4 class="text-sm sm:text-base font-medium tracking-widest text-black uppercase select-none">
                COMPANY
              </h4>
              <ul class="flex flex-col gap-2.5 text-sm text-black/60 font-normal">
                <li><a href="#" class="hover:text-black transition-colors">About</a></li>
                <li><a href="#" class="hover:text-black transition-colors">Features</a></li>
                <li><a href="#" class="hover:text-black transition-colors">Works</a></li>
                <li><a href="#" class="hover:text-black transition-colors">Career</a></li>
              </ul>
            </div>
            <div class="col-span-1 flex flex-col gap-3 sm:gap-4">
              <h4 class="text-sm sm:text-base font-medium tracking-widest text-black uppercase select-none">
                HELP
              </h4>
              <ul class="flex flex-col gap-2.5 text-sm text-black/60 font-normal">
                <li><a href="#" class="hover:text-black transition-colors">Customer Support</a></li>
                <li><a href="#" class="hover:text-black transition-colors">Delivery Details</a></li>
                <li><a href="#" class="hover:text-black transition-colors">Terms & Conditions</a></li>
                <li><a href="#" class="hover:text-black transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="col-span-1 flex flex-col gap-3 sm:gap-4">
              <h4 class="text-sm sm:text-base font-medium tracking-widest text-black uppercase select-none">
                FAQ
              </h4>
              <ul class="flex flex-col gap-2.5 text-sm text-black/60 font-normal">
                <li><a href="#" class="hover:text-black transition-colors">Account</a></li>
                <li><a href="#" class="hover:text-black transition-colors">Manage Deliveries</a></li>
                <li><a href="#" class="hover:text-black transition-colors">Orders</a></li>
                <li><a href="#" class="hover:text-black transition-colors">Payments</a></li>
              </ul>
            </div>
            <div class="col-span-1 flex flex-col gap-3 sm:gap-4">
              <h4 class="text-sm sm:text-base font-medium tracking-widest text-black uppercase select-none">
                RESOURCES
              </h4>
              <ul class="flex flex-col gap-2.5 text-sm text-black/60 font-normal">
                <li><a href="#" class="hover:text-black transition-colors">Free eBooks</a></li>
                <li><a href="#" class="hover:text-black transition-colors">Development Tutorial</a></li>
                <li><a href="#" class="hover:text-black transition-colors">How-to Blog</a></li>
                <li><a href="#" class="hover:text-black transition-colors">YouTube Playlist</a></li>
              </ul>
            </div>
          </div>
          <div class="pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-sm text-black/40 font-normal text-center sm:text-left select-none">
              Shop.co  2000-2026, All Rights Reserved
            </p>
            <div class="flex items-center gap-2">
              <div
                class="w-12 h-7 bg-white border border-black/5 rounded-[5px] flex items-center justify-center font-serif text-[10px] font-black italic tracking-tighter text-[#1A1F71] select-none">
                VISA</div>
              <div
                class="w-12 h-7 bg-white border border-black/5 rounded-[5px] flex items-center justify-center font-serif text-[10px] font-black italic tracking-tighter text-[#1A1F71] select-none">
                PayPal</div>
              <div
                class="w-12 h-7 bg-white border border-black/5 rounded-[5px] flex items-center justify-center font-serif text-[10px] font-black italic tracking-tighter text-[#1A1F71] select-none">
                VISA</div>
              <div
                class="w-12 h-7 bg-white border border-black/5 rounded-[5px] flex items-center justify-center font-serif text-[10px] font-black italic tracking-tighter text-[#1A1F71] select-none">
                VISA</div>
            </div>

`