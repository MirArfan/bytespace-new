import { Star } from "lucide-react";

export default function CourseCard({
  course,
  avatars = [],
  className = "",
  compact = false,
}) {
  const {
    title,
    author,
    rating = 4.5,
    lessons = "17 Lessons",
    duration = "2h 16m",
    comments = "59 Comments",
    level = "Beginner",
    price = "$25",
    priceType = "/lifetime",
    image,
  } = course || {};

  return (
    <div
      className={`bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-gray-100 transition-all ${
        compact ? "w-[220px] sm:w-[270px]" : "w-full"
      } ${className}`}
    >
      {/* Card Image & Overlay Tags */}
      <div className="relative w-full h-24 sm:h-32 rounded-xl overflow-hidden mb-2 sm:mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between gap-0.5 text-[7px] sm:text-[8px] text-gray-700">
          <span className="bg-white/90 px-1 py-0.5 rounded-full font-medium">
            {lessons}
          </span>
          <span className="bg-white/90 px-1 py-0.5 rounded-full font-medium">
            {duration}
          </span>
          <span className="bg-white/90 px-1 py-0.5 rounded-full font-medium">
            {comments}
          </span>
        </div>
      </div>

      {/* Title & Rating */}
      <div className="flex items-start justify-between gap-1 mb-0.5">
        <h3 className="text-xs font-bold text-slate-900 tracking-tight truncate">
          {title}
        </h3>
        <div className="flex items-center gap-0.5 text-[10px] font-semibold text-slate-700 shrink-0">
          <span>{rating}</span>
          <Star size={10} className="fill-yellow-400 text-yellow-400" />
        </div>
      </div>

      {/* Author */}
      <p className="text-[10px] text-gray-400 mb-2">
        by <span className="hover:underline cursor-pointer">{author}</span>
      </p>

      {/* Level Badge & Student Avatars */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2 pt-1 ">
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full text-[9px] text-gray-600 font-medium">
          <span className="flex items-end gap-[1px] h-2.5">
            <span className="w-[2px] h-1 bg-gray-500 rounded-sm" />
            <span className="w-[2px] h-2 bg-gray-500 rounded-sm" />
            <span className="w-[2px] h-2.5 bg-gray-300 rounded-sm" />
          </span>
          <span>{level}</span>
        </div>

        <div className="flex items-center -space-x-1.5">
          {avatars.slice(0, 4).map((avatar, idx) => (
            <img
              key={idx}
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
              src={avatar}
              alt="student"
            />
          ))}
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white bg-[#ccff00] text-slate-900 font-extrabold text-[7px] flex items-center justify-center">
            26+
          </span>
        </div>
      </div>

      {/* Pricing */}
      <div className="pt-1.5 border-t border-gray-50 flex items-baseline gap-1">
        <span className="text-sm font-black text-blue-600">{price}</span>
        <span className="text-[10px] text-gray-400 font-medium">
          {priceType}
        </span>
      </div>
    </div>
  );
}