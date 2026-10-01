import logoImg from "../assets/logo.png"; 

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-16 border-t border-gray-100 text-slate-800 text-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= TOP SECTION: Newsletter & Navigation Grid ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Left Side: Brand Logo & Newsletter Subscribe Form (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo */}
            <a href="#home" className="inline-flex items-center gap-2.5">
              <img
                src={logoImg}
                alt="ByteSpace Logo"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              />
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                ByteSpace
              </span>
            </a>

            {/* Newsletter Subtitle */}
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Subscribe Input Form */}
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3 pt-2 max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-200 rounded-full px-5 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
              />
              <button
                type="submit"
                className="bg-[#ccff00] text-gray-950 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-lime-400 transition-colors duration-200 shrink-0 shadow-sm cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Disclaimer / Terms note */}
            <p className="text-[10px] sm:text-xs text-gray-400 max-w-sm leading-normal">
              By subscribing, you agree to our <a href="#privacy" className="underline hover:text-gray-600">Privacy Policy</a> and consent to receive updates from our company.
            </p>
          </div>


          {/* Right Side: 3 Navigation Columns (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            
            {/* Column 1 */}
            <div className="space-y-3">
              <ul className="space-y-5 text-xs sm:text-sm text-gray-600 font-medium">
                <li><a href="#featured" className="hover:text-slate-900 transition-colors">Featured Courses</a></li>
                <li><a href="#categories" className="hover:text-slate-900 transition-colors">Featured Categories</a></li>
                <li><a href="#business" className="hover:text-slate-900 transition-colors">Business</a></li>
                <li><a href="#it" className="hover:text-slate-900 transition-colors">IT</a></li>
                <li><a href="#design" className="hover:text-slate-900 transition-colors">Design</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <ul className="space-y-5 text-xs sm:text-sm text-gray-600 font-medium">
                <li><a href="#development" className="hover:text-slate-900 transition-colors">Development</a></li>
                <li><a href="#marketing" className="hover:text-slate-900 transition-colors">Marketing</a></li>
                <li><a href="#photography" className="hover:text-slate-900 transition-colors">Photography</a></li>
                <li><a href="#finance" className="hover:text-slate-900 transition-colors">Finance</a></li>
                <li><a href="#sport" className="hover:text-slate-900 transition-colors">Sport</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <ul className="space-y-5 text-xs sm:text-sm text-gray-600 font-medium">
                <li><a href="#creator" className="hover:text-slate-900 transition-colors">Become a Creator</a></li>
                <li><a href="#affiliate" className="hover:text-slate-900 transition-colors">Affiliate Program</a></li>
                <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
                <li><a href="#help" className="hover:text-slate-900 transition-colors">Help</a></li>
                <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
              </ul>
            </div>

          </div>

        </div>


        {/* ================= BOTTOM ROW: Copyright & Legal Links ================= */}
        <div className="pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-slate-900 transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}