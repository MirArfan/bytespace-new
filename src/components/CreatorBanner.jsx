import Spiral1 from "../assets/Spiral1.png";
import Spiral2 from "../assets/Spiral2.png";
import pyramid from "../assets/pyramid.png";
import cylinder from "../assets/cylinder.png";
import cone from "../assets/cone.png";
import ring from "../assets/ring.png";

export default function CreatorBanner() {
    return (
        <section className="relative w-full bg-[#073be0]  py-20 md:py-28 px-4 overflow-hidden">

            {/* ================= BACKGROUND GRID PATTERN ================= */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* ================= LEFT SIDE SYMBOLS ================= */}
            {/* 1. Top Left Lime Spiral 1 */}
            <div className="absolute -top-16 -left-26 w-36 h-36 sm:w-52 sm:h-52 object-contain pointer-events-none z-10">
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

            {/* 2. Top Inner Left White Spiral 2 */}
            <img
                src={Spiral2}
                alt="Decorative Shape"
                className="absolute top-6 left-[18%] w-16 sm:w-24 md:w-32 object-contain brightness-200 contrast-200 pointer-events-none z-10"
            />

            {/* 3. Bottom Left White Cone */}
            <img
                src={cone}
                alt="Decorative Shape"
                className="absolute bottom-12 -left-14 w-20 sm:w-38 md:w-56 object-contain brightness-200 contrast-200 pointer-events-none z-10"
            />

            {/* 4. Bottom Inner Left Lime Ring */}
            <div className="absolute bottom-22 left-[15%] w-36 h-36 sm:w-52 sm:h-52 object-contain pointer-events-none z-10">
                <div
                    className="w-66 h-66 sm:w-82 sm:h-82 bg-[#ccff00]"
                    style={{
                        maskImage: `url(${ring})`,
                        WebkitMaskImage: `url(${ring})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat'
                    }}
                />
            </div>

            {/* ================= RIGHT SIDE SYMBOLS ================= */}
            {/* 1. Top Right Lime Pyramid */}
            <div className="absolute top-6 right-[14%] w-26 h-26 sm:w-42 sm:h-42 object-contain pointer-events-none z-10">
                <div
                    className="w-66 h-66 sm:w-52 sm:h-52 bg-[#ccff00]"
                    style={{
                        maskImage: `url(${pyramid})`,
                        WebkitMaskImage: `url(${pyramid})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat'
                    }}
                />
            </div>

            {/* 2. Far Right White Cylinder */}
            <img
                src={cylinder}
                alt="Decorative Shape"
                className="absolute top-24 -right-28 w-32 sm:w-48 md:w-84 object-contain brightness-200 contrast-200 pointer-events-none z-10"
            />

            {/* 3. Bottom Right Lime Spiral 1 */}
            <div className="absolute -bottom-8 right-[4%] w-36 h-36 sm:w-52 sm:h-52 object-contain pointer-events-none z-10">
                <div
                    className="w-66 h-66 sm:w-82 sm:h-82 bg-[#ccff00]"
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

            {/* ================= MAIN CENTER CONTENT ================= */}
            <div className="relative z-20 max-w-3xl mx-auto text-center space-y-6">
                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ">
                    Unlock Your Potential as a <br className="hidden sm:inline" />
                    Creator with ByteSpace
                </h2>

                {/* Subtitle / Description */}
                <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-3xl mx-auto opacity-90">
                    Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                </p>

                {/* Call to Action Button */}
                <div className="pt-2">
                    <a
                        href="#creator-register"
                        className="inline-block bg-[#ccff00] !text-gray-800 hover:!text-black font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full hover:bg-lime-400 transition-colors duration-200 shadow-lg cursor-pointer"
                    >
                        Join as Creator
                    </a>
                </div>
            </div>

        </section>
    );
}