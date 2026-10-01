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
      className={`bg-white rounded-2xl p-4 shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col justify-between ${
        compact ? "w-[220px] sm:w-[270px]" : "w-full"
      } ${className}`}
    >
      <div>
        {/* Card Image & Overlay Tags */}
        <div
          className={`relative w-full rounded-xl overflow-hidden mb-3 ${
            compact ? "h-24 sm:h-32" : "h-52 sm:h-60"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 text-gray-700">
            <span
              className={`bg-white/80 backdrop-blur-sm rounded-full font-medium truncate ${
                compact
                  ? "text-[7px] sm:text-[8px] px-1 py-0.5"
                  : "text-[10px] sm:text-xs px-2.5 py-1"
              }`}
            >
              {lessons}
            </span>
            <span
              className={`bg-white/80 backdrop-blur-sm rounded-full font-medium truncate ${
                compact
                  ? "text-[7px] sm:text-[8px] px-1 py-0.5"
                  : "text-[10px] sm:text-xs px-2.5 py-1"
              }`}
            >
              {duration}
            </span>
            <span
              className={`bg-white/80 backdrop-blur-sm rounded-full font-medium truncate ${
                compact
                  ? "text-[7px] sm:text-[8px] px-1 py-0.5"
                  : "text-[10px] sm:text-xs px-2.5 py-1"
              }`}
            >
              {comments}
            </span>
          </div>
        </div>

        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className={`font-bold text-slate-900 tracking-tight line-clamp-1 ${
              compact ? "text-xs" : "text-base"
            }`}
          >
            {title}
          </h3>
          <div
            className={`flex items-center gap-1 font-semibold text-slate-700 shrink-0 ${
              compact ? "text-[10px]" : "text-xs pt-0.5"
            }`}
          >
            <span>{rating}</span>
            <Star
              size={compact ? 10 : 13}
              className="fill-yellow-400 text-yellow-400"
            />
          </div>
        </div>

        {/* Author */}
        <p
          className={`text-gray-400 mb-4 ${
            compact ? "text-[10px]" : "text-xs"
          }`}
        >
          by{" "}
          <span className="hover:underline cursor-pointer font-medium text-gray-500">
            {author}
          </span>
        </p>

        {/* Level Badge & Student Avatars */}
        <div className="flex items-start gap-4 mb-4 pt-1">
          <div
            className={`flex items-center bg-gray-100 rounded-full text-gray-600 font-medium shrink-0 ${
              compact
                ? "gap-1 px-2 py-0.5 text-[9px]"
                : "gap-1.5 px-3 py-1 text-xs"
            }`}
          >
            <span
              className={`flex items-end gap-[2px] ${
                compact ? "h-2.5" : "h-3"
              }`}
            >
              <span className="w-[2px] h-1.5 bg-gray-500 rounded-sm" />
              <span className="w-[2px] h-2.5 bg-gray-500 rounded-sm" />
              <span className="w-[2px] h-3 bg-gray-300 rounded-sm" />
            </span>
            <span>{level}</span>
          </div>

          <div className="flex items-center -space-x-1.5 shrink-0">
            {avatars.slice(0, 4).map((avatar, idx) => (
              <img
                key={idx}
                className={`rounded-full border-2 border-white object-cover ${
                  compact ? "w-5 h-5 sm:w-6 sm:h-6" : "w-6 h-6"
                }`}
                src={avatar}
                alt="student"
              />
            ))}
            <span
              className={`rounded-full border-2 border-white bg-[#ccff00] text-slate-900 font-extrabold flex items-center justify-center ${
                compact
                  ? "w-5 h-5 sm:w-6 sm:h-6 text-[7px]"
                  : "w-6 h-6 text-[9px]"
              }`}
            >
              26+
            </span>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="pt-3 border-t border-gray-100 flex items-baseline gap-1">
        <span
          className={`font-black text-blue-600 ${
            compact ? "text-sm" : "text-lg"
          }`}
        >
          {price}
        </span>
        <span className="text-xs text-gray-400 font-medium">
          {priceType}
        </span>
      </div>
    </div>
  );
}