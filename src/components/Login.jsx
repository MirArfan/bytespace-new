import { Star } from "lucide-react";
import { Link } from "react-router-dom";

import logoImg from "../assets/logo.png";
import courseImg3 from "../assets/course-3.jpg"; 
import courseImg2 from "../assets/course-2.jpg"; 

import ring from "../assets/ring.png";
import pyramid from "../assets/pyramid.png";
import Spiral2 from "../assets/spiral2.png";
import Ellipse1 from "../assets/ellipse1.png";
import Ellipse2 from "../assets/ellipse2.png";
import Ellipse3 from "../assets/ellipse3.png";
import Ellipse4 from "../assets/ellipse4.png";
import Ellipse5 from "../assets/ellipse5.png";
import Ellipse6 from "../assets/ellipse6.png";
import Ellipse7 from "../assets/ellipse7.png";

import CourseCard from "./CourseCard";

export default function SignIn() {
  return (
    <section className="relative w-full min-h-screen bg-[#073be0] text-white flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden">
      {/* ================= BACKGROUND GRID PATTERN ================= */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ================= LEFT SIDE: Branding & Overlapping Visual Cards (5 Cols) ================= */}
        <div className="lg:col-span-5 space-y-8">
          {/* Top Logo & Intro Heading */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img
                src={logoImg}
                alt="ByteSpace Logo"
                className="w-8 h-8 object-contain"
              />
            </Link>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Sign in with ease
            </h1>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-md font-normal">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          {/* Visual Overlapping Cards Composition */}
          <div className="relative w-full h-[380px] sm:h-[420px] flex items-center justify-center lg:justify-start">
            {/* 3D Decorative Shape 1: Lime Ring Top Left */}
            <div className="absolute -top-10 left-2 sm:left-6 w-24 h-24 sm:w-28 sm:h-28 z-30 pointer-events-none">
              <div
                className="w-full h-full bg-[#ccff00]"
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

            {/* Bottom Card: Build Digital Asset */}
            <CourseCard
              className="absolute left-0 sm:left-2 top-28 sm:top-24 z-10 opacity-95"
              compact={true}
              course={{
                title: "Build Digital Asset",
                author: "purepearl studio",
                rating: 4.5,
                lessons: "17 Lessons",
                duration: "2h 16m",
                comments: "59 Comments",
                level: "Beginner",
                price: "$25",
                priceType: "/lifetime",
                image: courseImg2,
              }}
              avatars={[Ellipse1, Ellipse2, Ellipse3, Ellipse4]}
            />

            {/* Top Card: Learn Figma from Basic */}
            <CourseCard
              className="absolute left-10 sm:left-20 top-2 sm:top-0 z-20 shadow-2xl"
              compact={true}
              course={{
                title: "Learn Figma from Basic",
                author: "purepearl studio",
                rating: 4.5,
                lessons: "17 Lessons",
                duration: "2h 16m",
                comments: "59 Comments",
                level: "Beginner",
                price: "$25",
                priceType: "/lifetime",
                image: courseImg3,
              }}
              avatars={[Ellipse1, Ellipse2, Ellipse3, Ellipse4]}
            />

            {/* 3D Decorative Shape 2: White Squiggle Middle Right */}
            <img
              src={Spiral2}
              alt="Decorative Squiggle"
              className="absolute top-28 right-0 sm:right-2 w-28 h-28 sm:w-36 sm:h-36 object-contain brightness-200 contrast-200 z-30 pointer-events-none"
            />

            {/* 3D Decorative Shape 3: Lime Pyramid Bottom Left */}
            <div className="absolute -bottom-4 left-4 sm:left-8 w-24 h-24 sm:w-28 sm:h-28 z-30 pointer-events-none">
              <div
                className="w-full h-full bg-[#ccff00]"
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

            {/* Happy Students Card */}
            <div className="absolute -bottom-2 right-4 sm:right-10 z-30 bg-[#ccff00] backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-gray-100 min-w-[150px] sm:min-w-[170px]">
              <p className="text-xs font-bold text-slate-900 mb-1.5">
                Happy Students
              </p>
              <div className="flex flex-col items-start gap-1.5">
                <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
                  <span>4.5</span>
                  <span className="text-gray-400 font-normal text-[10px]">
                    (240)
                  </span>
                  <Star
                    size={11}
                    className="fill-blue-900 text-blue-700 ml-0.5"
                  />
                </div>
                <div className="flex -space-x-1.5 sm:-space-x-2">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={Ellipse1}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={Ellipse2}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={Ellipse3}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={Ellipse4}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={Ellipse5}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={Ellipse6}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={Ellipse7}
                    alt="student"
                  />
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900 text-slate-0 opacity-80 text-[8px] font-extrabold flex items-center justify-center border-2 border-white">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: Sign In Form Card (7 Cols) ================= */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
            {/* Header */}
            <div>
              <p className="text-xs font-semibold text-blue-600 mb-1">
                Sign In
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Welcome Back
              </h2>
            </div>

            {/* Form Fields */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              {/* Submit Button Row */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#ccff00] text-gray-950 font-extrabold text-sm px-8 py-3 rounded-full hover:bg-lime-400 transition-colors shadow-md cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* OR Divider */}
            <div className="relative flex items-center justify-center pt-2">
              <div className="border-t border-gray-200 w-full" />
              <span className="bg-white px-3 text-xs text-gray-400 font-medium absolute">
                or
              </span>
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                type="button"
                className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              <button
                type="button"
                className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </button>
            </div>

            {/* Footer Link */}
            <div className="text-center pt-2">
              <p className="text-xs text-gray-400 font-medium">
                New user?{" "}
                <Link
                  to="/signup"
                  className="!text-blue-600 font-bold hover:underline"
                  
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}