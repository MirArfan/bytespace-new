import { Search } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-40 text-center max-w-4xl mx-auto px-4 pb-6 pt-24 md:pt-28">
    

      {/* Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-10 mt-10">
        Get Access to Hundreds <br />
        <span >Courses Available</span>
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed ">
        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
      </p>

      {/* Search Form */}
      <form 
        onSubmit={(e) => e.preventDefault()}
        className="bg-white p-1.5 sm:p-2 pl-4 sm:pl-6 rounded-full flex items-center max-w-lg md:max-w-xl mx-auto shadow-2xl transition-all border border-white/20 mb-15"
      >
        <Search size={20} className="text-gray-400 mr-2 shrink-0" />
        <input
          type="text"
          className="w-full text-gray-800 placeholder-gray-400 focus:outline-none text-sm md:text-base bg-transparent"
          placeholder="Course, topic, creator"
        />
        <button 
          type="submit" 
          className="bg-[#ccff00] text-gray-950 font-bold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-lime-400 transition-colors cursor-pointer text-sm sm:text-base shrink-0"
        >
          Search
        </button>
      </form>
    </div>
  );
}