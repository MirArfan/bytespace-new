import { Star } from "lucide-react";

import courseImg1 from "../assets/course-1.jpg";
import courseImg2 from "../assets/course-2.jpg";
import courseImg3 from "../assets/course-3.jpg";
import courseImg4 from "../assets/course-4.jpg";
import courseImg5 from "../assets/course-5.jpg";
import courseImg6 from "../assets/course-6.jpg";

import Ellipse1 from "../assets/Ellipse1.png"
import Ellipse2 from "../assets/Ellipse2.png"
import Ellipse3 from "../assets/Ellipse3.png"
import Ellipse4 from "../assets/Ellipse4.png"



const coursesData = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    priceType: "/lifetime",
    image: courseImg1,
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    priceType: "/lifetime",
    image: courseImg2,
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "3 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    priceType: "/lifetime",
    image: courseImg3,
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    priceType: "/lifetime",
    image: courseImg4,
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    priceType: "/lifetime",
    image: courseImg5,
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    priceType: "/lifetime",
    image: courseImg6,
  },
];

export default function CourseGrid() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Course Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Top Content Group */}
              <div>
                {/* Card Image Header with Overlays */}
                <div className="relative w-full h-52 sm:h-60 rounded-xl overflow-hidden mb-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Tags Overlay */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 text-[10px] sm:text-xs text-gray-700 z-0">
                    <span className="bg-white/80 bg-white-md px-2 sm:px-2.5 py-1 rounded-full font-medium truncate">
                      {course.lessons}
                    </span>
                    <span className="bg-white/80 bg-white-md px-2 sm:px-2.5 py-1 rounded-full font-medium truncate">
                      {course.duration}
                    </span>
                    <span className="bg-white/80 bg-white-md px-2 sm:px-2.5 py-1 rounded-full font-medium truncate">
                      {course.comments}
                    </span>
                  </div>
                </div>

                {/* Title & Rating */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight line-clamp-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 shrink-0 pt-0.5">
                    <span>{course.rating}</span>
                    <Star size={13} className="fill-yellow-400 text-yellow-400" />
                  </div>
                </div>

                {/* Author */}
                <p className="text-xs text-gray-400 mb-4">
                  by <span className="hover:underline cursor-pointer font-medium text-gray-500">{course.author}</span>
                </p>

                {/* Metadata (Level Badge & Student Avatars - Space Between Added) */}
                <div className="flex items-center gap-6 mb-4 pt-2">
                  <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600 font-medium shrink-0">
                    {/* Signal/Bar Icon */}
                    <span className="flex items-end gap-[2px] h-3">
                      <span className="w-[2px] h-1.5 bg-gray-500 rounded-sm"></span>
                      <span className="w-[2px] h-2.5 bg-gray-500 rounded-sm"></span>
                      <span className="w-[2px] h-3 bg-gray-300 rounded-sm"></span>
                    </span>
                    <span>{course.level}</span>
                  </div>

                  {/* Overlapping Student Avatars */}
                  <div className="flex items-center -space-x-2 shrink-0">
                    <img
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      src={Ellipse1}
                      alt="student"
                    />
                    <img
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      src={Ellipse2}
                      alt="student"
                    />
                    <img
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      src={Ellipse3}
                      alt="student"
                    />
                    <img
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      src={Ellipse4}
                      alt="student"
                    />
                    <span className="w-6 h-6 rounded-full border-2 border-white bg-[#ccff00] text-slate-900 font-extrabold text-[9px] flex items-center justify-center">
                      26+
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Row */}
              <div className="pt-3 border-t border-gray-100 flex items-baseline gap-1">
                <span className="text-lg font-black text-blue-600">
                  {course.price}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {course.priceType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}