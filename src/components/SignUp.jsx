import { Star } from "lucide-react";
import { Link } from "react-router-dom";

import logoImg from "../assets/logo.png";
import courseImg3 from "../assets/course-3.jpg"; // Big Data Course image
import courseImg2 from "../assets/course-2.jpg"; // Digital Asset Course image

import ring from "../assets/ring.png";
import pyramid from "../assets/pyramid.png";
import spiral2 from "../assets/spiral2.png";
import ellipse1 from "../assets/ellipse1.png";
import ellipse2 from "../assets/ellipse2.png";
import ellipse3 from "../assets/ellipse3.png";
import ellipse4 from "../assets/ellipse4.png";
import ellipse5 from "../assets/ellipse5.png";
import ellipse6 from "../assets/ellipse6.png";
import ellipse7 from "../assets/ellipse7.png";

import CourseCard from "./CourseCard";

export default function SignUp() {
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
              Sign up and come in
            </h1>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-md font-normal">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost.
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
              avatars={[ellipse1, ellipse2, ellipse3, ellipse4]}
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
              avatars={[ellipse1, ellipse2, ellipse3, ellipse4]}
            />

            {/* 3D Decorative Shape 2: White Squiggle Middle Right */}
            <img
              src={spiral2}
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
                    src={ellipse1}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={ellipse2}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={ellipse3}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={ellipse4}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={ellipse5}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={ellipse6}
                    alt="student"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                    src={ellipse7}
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

        {/* ================= RIGHT SIDE: Sign Up Form Card (7 Cols) ================= */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
            {/* Header */}
            <div>
              <p className="text-xs font-semibold text-blue-600 mb-1">
                Create an Account
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Welcome to <br />
                ByteSpace
              </h2>
            </div>

            {/* Form Fields */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jamie Davis"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

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
                  Continue
                </button>
              </div>
            </form>

            {/* Footer Link */}
            <div className="text-center pt-4">
              <p className="text-xs text-gray-400 font-medium">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="!text-blue-600 font-bold hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}