import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full h-20 sm:h-24 bg-[#073be0] border-b border-white/20 z-50 text-white font-medium">
      {/* Container */}
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="font-extrabold flex items-center gap-2.5 tracking-tight hover:opacity-90 transition-opacity"
        >
          <img 
            src={logoImg} 
            alt="ByteSpace Logo" 
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain" 
          />
          <span className="text-xl sm:text-2xl">ByteSpace</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base" aria-label="Primary navigation">
          <Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
          <a href="#courses" className="text-white/90 hover:text-white transition-colors">Courses</a>
          <a href="#creators" className="text-white/90 hover:text-white transition-colors">Creators</a>
        </nav>

        {/* Right Side Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 text-sm lg:text-base">
          {/* Sign In Link */}
          <Link 
            to="/login" 
            className="hidden sm:inline-block text-white/90 hover:text-white transition-colors"
          >
            Sign In
          </Link>

          {/* Join Us Link */}
          <Link 
            to="/signup" 
            className="text-white/90 hover:text-white hover:bg-white/10 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200 border border-white/20 sm:border-transparent"
          >
            Join Us
          </Link>

          {/* Shopping Bag Button */}
          <button 
            aria-label="Open shopping bag"
            className="p-1 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-white focus:outline-none cursor-pointer ml-1"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 sm:top-24 left-0 w-full bg-[#073be0] border-b border-white/10 flex flex-col p-6 gap-4 md:hidden text-base z-50 shadow-xl">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className="hover:text-[#ccff00] transition-colors py-1"
          >
            Home
          </Link>
          <a 
            href="#courses" 
            onClick={() => setMobileMenuOpen(false)} 
            className="hover:text-[#ccff00] transition-colors py-1"
          >
            Courses
          </a>
          <a 
            href="#creators" 
            onClick={() => setMobileMenuOpen(false)} 
            className="hover:text-[#ccff00] transition-colors py-1"
          >
            Creators
          </a>
          <Link 
            to="/signin" 
            onClick={() => setMobileMenuOpen(false)} 
            className="sm:hidden hover:text-[#ccff00] transition-colors py-1 border-t border-white/10 pt-3"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}