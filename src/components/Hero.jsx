import { Search, Star } from "lucide-react";

import studentImg from "../assets/student_pic.png";

// 3D Shapes & Avatars
import Spiral1 from "../assets/spiral1.png"; // Green Squiggle (Top-Left)
import Spiral2 from "../assets/spiral2.png"; // White Squiggle (Left & Right)
import ring from "../assets/ring.png"; // White Ring (Bottom-Left)
import pyramid from "../assets/pyramid.png"; // White Pyramid (Right)
import Cylinder from "../assets/cylinder.png"; // Green Cylinder (Top-Right)

import Ellipse1 from "../assets/ellipse1.png";
import Ellipse2 from "../assets/ellipse2.png";
import Ellipse3 from "../assets/ellipse3.png";
import Ellipse4 from "../assets/ellipse4.png";
import Ellipse5 from "../assets/ellipse5.png";
import Ellipse6 from "../assets/ellipse6.png";
import Ellipse7 from "../assets/ellipse7.png";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[100vh] bg-[#073be0] text-white flex flex-col items-center pt-12 lg:pt-16 overflow-hidden">

            {/* ================= BACKGROUND GRID PATTERN ================= */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* ================= TOP CONTENT: Heading, Subtitle & Search Bar ================= */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-6 mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    Get Access to Hundreds <br className="hidden sm:inline" />
                    Courses Available
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
                    Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                </p>

                {/* Search Bar Input */}
                <div className="pt-2 flex justify-center">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="w-full max-w-lg flex items-center justify-between gap-3 sm:gap-4"
                    >
                        {/* Input Field Box */}
                        <div className="flex-1 flex items-center gap-3 bg-white rounded-full px-4 py-2.5 sm:py-3 shadow-xl">
                            <Search size={18} className="text-gray-400 shrink-0" />
                            <input
                                type="text"
                                placeholder="Course, topic, creator"
                                className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder-gray-400 focus:outline-none"
                            />
                        </div>

                        {/* Separate Search Button */}
                        <button
                            type="submit"
                            className="bg-[#ccff00] text-slate-950 font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-full hover:bg-lime-400 transition-colors shadow-xl cursor-pointer shrink-0"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>


            {/* ================= BOTTOM HERO COMPOSITION (Lime Arch, Student & Badges) ================= */}
            <div className="relative z-10 w-full flex-1 flex justify-center items-end px-4 mt-16 sm:mt-24">

                {/* Big Lime Green Half-Circle Arch in Background */}
                <div className="relative w-[380px] sm:w-[580px] md:w-[750px] lg:w-[850px] h-[260px] sm:h-[380px] md:h-[480px] bg-[#ccff00] rounded-t-full flex justify-center items-end">

                    {/* Main Student Center Image */}
                    <img
                        src={studentImg}
                        alt="Student learning on laptop"
                        className="relative z-10 w-[320px] sm:w-[500px] md:w-[650px] lg:w-[950px] object-contain -mb-1 left-12"
                    />

                    {/* ---------------- FLOATING BADGES - Position adjusted for larger student image ---------------- */}

                    {/* Badge 1: UI/UX Design (Middle-Left) */}
                    <div className="absolute top-20 sm:top-28 -left-8 sm:-left-12 md:-left-16 z-20 bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
                        <p className="text-xs font-bold text-slate-900">UI/UX Design</p>
                        <p className="text-[10px] text-gray-400 font-medium">200 Courses • 1000+ Students</p>
                    </div>

                    {/* Badge 2: Learning Progress (Middle-Right) */}
                    <div className="absolute top-16 -right-4 sm:right-6 md:right-12 z-20 bg-white text-slate-900 p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 min-w-[140px] sm:min-w-[170px]">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-medium mb-1">Learning Progress</p>
                        <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">55%</p>
                        <div className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
                            <div className="bg-[#ccff00] h-full w-[55%] rounded-full" />
                        </div>
                    </div>

                    {/* Badge 3: Happy Students (Bottom-Left) */}
                    <div className="absolute bottom-10 sm:bottom-16 left-6 sm:left-4 md:left-10 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-gray-100 min-w-[140px] sm:min-w-[160px]">
                        <p className="text-xs font-bold text-slate-900 mb-1.5">Happy Students</p>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                                <span>4.5</span>
                                <span className="text-gray-400 font-normal text-[9px]">(240)</span>
                                <Star size={10} className="fill-amber-400 text-amber-400 ml-0.5" />
                            </div>
                            <div className="flex -space-x-1.5">
                                <img className="w-5 h-5 rounded-full border border-white object-cover" src={Ellipse1} alt="student" />
                                <img className="w-5 h-5 rounded-full border border-white object-cover" src={Ellipse2} alt="student" />
                                <img className="w-5 h-5 rounded-full border border-white object-cover" src={Ellipse3} alt="student" />
                                <img className="w-5 h-5 rounded-full border border-white object-cover" src={Ellipse4} alt="student" />
                                <img className="w-5 h-5 rounded-full border border-white object-cover" src={Ellipse5} alt="student" />
                                <img className="w-5 h-5 rounded-full border border-white object-cover" src={Ellipse6} alt="student" />
                                <img className="w-5 h-5 rounded-full border border-white object-cover" src={Ellipse7} alt="student" />
                                <span className="w-5 h-5 rounded-full bg-[#ccff00] text-slate-950 text-[7px] font-extrabold flex items-center justify-center border border-white">
                                    2K+
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            {/* ================= FLOATING 3D DECORATIVE SHAPES (OUTSIDE) - পজিশন অপরিবর্তিত রাখা হয়েছে ================= */}

            {/* Top Left: Lime Green Squiggle */}
            <div className="absolute top-6 -left-26 w-36 h-36 sm:w-52 sm:h-52 object-contain pointer-events-none z-10">
                <div
                    className="w-66 h-66 sm:w-82 sm:h-82 bg-[#ccff00]"
                    style={{
                        maskImage: `url(${Spiral1})`,
                        WebkitMaskImage: `url(${Spiral1})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat'
                    }}
                />
            </div>

            {/* Middle Left: White Squiggle */}
            <img
                src={Spiral2}
                alt="White Squiggle"
                className="absolute top-80 -left-4 sm:left-72 w-30 sm:w-38 object-contain brightness-200 contrast-200 z-0 pointer-events-none"
            />

            {/* Bottom Left: White Ring */}
            <div className="absolute bottom-12 left-2 sm:left-31 w-24 sm:w-56 h-24 sm:h-56 z-0 pointer-events-none opacity-90">
                <div
                    className="w-full h-full bg-white"
                    style={{
                        maskImage: `url(${ring})`,
                        WebkitMaskImage: `url(${ring})`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                    }}
                />
            </div>

            {/* Top Right: Lime Cylinder */}
            
            <div className="absolute top-2 -right-28 w-32 sm:w-48 md:w-84 h-32 sm:h-48 md:h-84 object-contain pointer-events-none z-10">
                <div
                    className="w-full h-full bg-[#ccff00]"
                    style={{
                        maskImage: `url(${Cylinder})`,
                        WebkitMaskImage: `url(${Cylinder})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat'
                    }}
                />
            </div>

            {/* Middle Right: White Pyramid */}
            <div className="absolute top-77 right-8 sm:right-70 w-20 sm:w-38 h-20 sm:h-38 z-0 pointer-events-none">
                <div
                    className="w-full h-full bg-white"
                    style={{
                        maskImage: `url(${pyramid})`,
                        WebkitMaskImage: `url(${pyramid})`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                    }}
                />
            </div>

            {/* Bottom Right: White Squiggle */}
            <img
                src={Spiral2}
                alt="White Squiggle Right"
                className="absolute bottom-12 right-2 sm:right-20 w-24 sm:w-62 object-contain brightness-200 contrast-200 z-0 pointer-events-none"
            />

        </section>
    );
}