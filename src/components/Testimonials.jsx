import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

const testimonialsData = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        avatar: person1,
        review:
            '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
        id: 2,
        name: "James L.",
        role: "Lifelong Learner",
        avatar: person2,
        review:
            '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
        id: 3,
        name: "Alex B.",
        role: "Inspired Creator",
        avatar: person3,
        review:
            '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
];

export default function Testimonials() {
    return (
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden isolate z-0">

            {/* ================= BACKGROUND BLUR BLOBS ================= */}
            {/* 1. Top Middle - Soft Lime/Yellow Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-[#ccff00]/30 rounded-full blur-[130px] pointer-events-none -z-10" />

            {/* 2. Left Bottom - Soft Blue Glow */}
            <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] bg-blue-200/60 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* 3. Right Middle/Bottom - Soft Yellow/Lime Glow */}
            <div className="absolute top-1/3 -right-10 w-[450px] h-[450px] bg-[#ccff00]/35 rounded-full blur-[140px] pointer-events-none -z-10" />


            <div className="max-w-7xl mx-auto">

                {/* ================= HEADER SECTION ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start mb-16 sm:mb-20">
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                            Discover What Our <br className="hidden sm:inline" />
                            Community Is Saying
                        </h2>
                    </div>

                    <div>
                        <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
                            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                        </p>
                    </div>
                </div>

                {/* ================= TESTIMONIAL CARDS GRID ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 items-stretch">
                    {testimonialsData.map((item) => (
                        <div
                            key={item.id}

                            className=" bg-white/90backdrop-blur-sm rounded-3xl p-7 sm:p-9 border border-gray-100/80 
                                        shadow-lg shadow-gray-100/50 flex flex-col justify-between 
                                        min-h-[280px] sm:min-h-[300px] h-full
                                        hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div>
                                {/* User Avatar & Info */}
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                                    />
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900 tracking-tight">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs font-medium text-blue-600 mt-0.5">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Review Text */}
                                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                                    {item.review}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}