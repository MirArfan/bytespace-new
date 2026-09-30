import {
  PencilRuler,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const categories = [
  { id: 1, name: "Design", icon: PencilRuler },
  { id: 2, name: "Development", icon: Code2 },
  { id: 3, name: "IT & Software", icon: Laptop },
  { id: 4, name: "Business", icon: Building2 },
  { id: 5, name: "Marketing", icon: Megaphone },
  { id: 6, name: "Photography", icon: Camera },
];

export default function LearningPaths() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading & Subtitle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        
        <p className="max-w-5xl mx-auto text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed mb-12">
          At Bytespace, we believe in empowering individuals through knowledge. Our
          diverse range of courses spans various fields, ensuring there's something
          for everyone. Unleash your potential and explore our carefully curated
          categories.
        </p>

        {/* Categories Grid (2 col on mobile, 3 on tablet, 6 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group flex flex-col items-center justify-center p-6 bg-white border border-gray-200/80 
                           rounded-2xl transition-all duration-300 cursor-pointer 
                           hover:border-transparent hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1.5"
              >
                {/* Neon Lime Circle Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-[#ccff00] flex items-center justify-center mb-4 
                                transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-6 h-6 text-slate-900 stroke-[2.2]" />
                </div>

                {/* Category Label */}
                <span className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight text-center">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}