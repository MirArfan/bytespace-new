import { Star } from "lucide-react";

import learnerImg from "../assets/student_pic.png";
import Ellipse1 from "../assets/ellipse1.png";
import Ellipse2 from "../assets/ellipse2.png";
import Ellipse3 from "../assets/ellipse3.png";
import Ellipse4 from "../assets/ellipse4.png";
import Ellipse5 from "../assets/ellipse5.png";
import Ellipse6 from "../assets/ellipse6.png";
import Ellipse7 from "../assets/ellipse7.png";

import Spiral1 from "../assets/spiral1.png";
import Spiral2 from "../assets/spiral2.png";

import courseImg1 from "../assets/course-1.jpg";

export default function FeatureSections() {
    return (
        <section className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">

            {/* Background Gradient Blobs */}
            <div className="absolute top-10 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-lime-300/40 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
            <div className="absolute top-[45%] -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/50 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/30 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

            <div className="absolute top-10 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-sky-200/50 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-300/40 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto space-y-24 lg:space-y-32">

                {/* ================= TOP SECTION: Student/Learner ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                            Your Path to Professional <br className="hidden sm:inline" />
                            Growth Starts Here!
                        </h2>

                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>

                        {/* Stats */}
                        <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 sm:gap-12">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600">12K</h3>
                                <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Students</p>
                            </div>
                            <div className="h-8 w-[1px] bg-gray-200" />
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600">70+</h3>
                                <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Courses</p>
                            </div>
                            <div className="h-8 w-[1px] bg-gray-200" />
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600">16</h3>
                                <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Creators</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Composition */}
                    <div className="relative flex justify-center items-center h-[380px] sm:h-[460px] w-full max-w-lg mx-auto">

                        {/* 1. Behind Card: Course Card */}
                        <div className="absolute left-0 sm:left-2 top-2 w-[220px] sm:w-[270px] bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-gray-100 z-0 opacity-95">
                            <div className="relative w-full h-24 sm:h-32 rounded-xl overflow-hidden mb-2 sm:mb-3">
                                <img
                                    src={courseImg1}
                                    alt="Learn Figma from Basic"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between gap-0.5 text-[7px] sm:text-[8px] text-gray-700">
                                    <span className="bg-white/90 px-1 py-0.5 rounded-full font-medium">17 Lessons</span>
                                    <span className="bg-white/90 px-1 py-0.5 rounded-full font-medium">2h 16m</span>
                                    <span className="bg-white/90 px-1 py-0.5 rounded-full font-medium">59 Comments</span>
                                </div>
                            </div>

                            <div className="flex items-start justify-between gap-1 mb-0.5">
                                <h3 className="text-xs font-bold text-slate-900 tracking-tight truncate">
                                    Learn Figma from Basic
                                </h3>
                                <div className="flex items-center gap-0.5 text-[10px] font-semibold text-slate-700 shrink-0">
                                    <span>4.5</span>
                                    <Star size={10} className="fill-yellow-400 text-yellow-400" />
                                </div>
                            </div>

                            <p className="text-[10px] text-gray-400 mb-2">
                                by <span className="hover:underline cursor-pointer">purepearl studio</span>
                            </p>

                            <div className="flex items-center gap-2 sm:gap-3 mb-2 pt-1 justify-between">
                                <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full text-[9px] text-gray-600 font-medium">
                                    <span className="flex items-end gap-[1px] h-2.5">
                                        <span className="w-[2px] h-1 bg-gray-500 rounded-sm"></span>
                                        <span className="w-[2px] h-2 bg-gray-500 rounded-sm"></span>
                                        <span className="w-[2px] h-2.5 bg-gray-300 rounded-sm"></span>
                                    </span>
                                    <span>Beginner</span>
                                </div>

                                <div className="flex items-center -space-x-1.5">
                                    <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src={Ellipse1} alt="student" />
                                    <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src={Ellipse2} alt="student" />
                                    <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src={Ellipse3} alt="student" />
                                    <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src={Ellipse4} alt="student" />
                                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white bg-[#ccff00] text-slate-900 font-extrabold text-[7px] flex items-center justify-center">
                                        26+
                                    </span>
                                </div>
                            </div>

                            <div className="pt-1.5 border-t border-gray-50 flex items-baseline gap-1">
                                <span className="text-sm font-black text-blue-600">$25</span>
                                <span className="text-[10px] text-gray-400 font-medium">/lifetime</span>
                            </div>
                        </div>

                        {/* 2. Main Character (Student) */}
                        <img
                            src={learnerImg}
                            alt="Student learning"
                            className="w-72 sm:w-[400px] md:w-[480px] h-auto object-contain relative z-10 ml-8 sm:ml-16"
                        />

                        {/* 3. Green Spiral Decorative Element */}
                        <div className="absolute right-12 sm:right-24 top-6 sm:top-10 z-20 pointer-events-none">
                            <div
                                className="w-28 h-28 sm:w-40 sm:h-40 bg-[#ccff00]"
                                style={{
                                    maskImage: `url(${Spiral2})`,
                                    WebkitMaskImage: `url(${Spiral2})`,
                                    maskSize: 'contain',
                                    WebkitMaskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskRepeat: 'no-repeat'
                                }}
                            />
                        </div>

                        {/* 4. Floating Progress Card */}
                        <div className="absolute right-0 sm:right-6 bottom-8 sm:bottom-16 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-gray-100 min-w-[120px] sm:min-w-[140px]">
                            <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium mb-0.5">Learning Progress</p>
                            <p className="text-xl sm:text-2xl font-black text-slate-900 mb-1">55%</p>
                            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="w-[55%] h-full bg-[#ccff00] rounded-full" />
                            </div>
                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM SECTION: Creator ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Visual Composition */}
                    <div className="relative flex justify-center items-center h-[380px] sm:h-[440px] w-full max-w-lg mx-auto order-2 lg:order-1">

                        {/* Box 1: Total Revenue (Blue Top) */}
                        <div className="absolute top-6 sm:top-12 left-0 sm:left-10 z-2 bg-blue-600 text-white p-3 sm:p-3.5 rounded-2xl shadow-xl w-32 sm:w-40">
                            <p className="text-[10px] text-blue-100 font-medium">Total Revenue</p>
                            <p className="text-[9px] text-blue-200 mb-1">July 1-28</p>
                            <p className="text-base sm:text-lg font-bold">$120.29</p>
                            <div className="w-full h-1 bg-blue-400/50 rounded-full mt-2 overflow-hidden">
                                <div className="w-[70%] h-full bg-lime-400 rounded-full" />
                            </div>
                        </div>

                        {/* Box 2: Year to Date (Darker Blue Middle) */}
                        <div className="absolute top-36 sm:top-44 left-0 sm:left-4 z-10 bg-[#073be0] text-white p-3 sm:p-3.5 rounded-2xl shadow-xl border border-white/10 w-32 sm:w-40">
                            <p className="text-[10px] text-blue-200 font-medium">Year to Date</p>
                            <p className="text-[9px] text-blue-300">2023</p>
                            <p className="text-sm sm:text-base font-bold mt-0.5">$1,200.38</p>
                            <span className="inline-block bg-[#ccff00] text-slate-950 text-[8px] sm:text-[9px] font-black px-2 py-0.5 rounded-full mt-1.5">
                                +12%
                            </span>
                        </div>

                        {/* Main Creator Character */}
                        <img
                            src={learnerImg}
                            alt="Student learning"
                            className="w-72 sm:w-[400px] md:w-[480px] h-auto object-contain relative z-10 ml-8 sm:ml-16"
                        />

                        {/* Green Spiral Decorative Element Right */}
                        <div className="absolute right-0 sm:right-4 top-8 sm:top-12 z-20 pointer-events-none">
                            <div
                                className="w-36 h-36 sm:w-52 sm:h-52 bg-[#ccff00]"
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

                        {/* Box 3: Happy Students (Bottom Right) */}
                        <div className="absolute bottom-4 sm:bottom-[10%] right-0 sm:right-2 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-gray-100 min-w-[150px] sm:min-w-[170px]">
                            <p className="text-xs font-bold text-slate-900 mb-1.5">Happy Students</p>
                            <div className="flex flex-col items-start gap-1.5">
                                <div className="flex items-center gap-0.5 text-xs font-bold text-slate-800">
                                    <span>4.5</span>
                                    <span className="text-gray-400 font-normal">(240)</span>
                                    <Star size={11} className="fill-amber-400 text-amber-400" />
                                </div>
                                <div className="flex -space-x-1.5 sm:-space-x-2">
                                    <img className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover" src={Ellipse1} alt="student" />
                                    <img className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover" src={Ellipse2} alt="student" />
                                    <img className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover" src={Ellipse3} alt="student" />
                                    <img className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover" src={Ellipse4} alt="student" />
                                    <img className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover" src={Ellipse5} alt="student" />
                                    <img className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover" src={Ellipse6} alt="student" />
                                    <img className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover" src={Ellipse7} alt="student" />
                                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#ccff00] text-slate-950 text-[8px] font-extrabold flex items-center justify-center border-2 border-white">
                                        2K+
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Text Content */}
                    <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                            Create & Manage <br className="hidden sm:inline" />
                            Courses Easily.
                        </h2>

                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            <span className="font-bold">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
                        </p>

                        {/* Checklist */}
                        <div className="pt-2 flex flex-col items-start gap-3 max-w-md mx-auto lg:mx-0 text-left">
                            {[
                                "Share Your Expertise",
                                "Monetize Your Passion",
                                "Flexibility and Autonomy",
                                "Build a Community",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2.5">
                                    <div className="w-[18px] h-[18px] flex items-center justify-center bg-blue-600 rounded-full shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-white"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}