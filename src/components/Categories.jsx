import { useState } from 'react';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState('Featured');

    const getBtnClass = (name) => {
        const isSelected = activeCategory === name;
        return `px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${isSelected
                ? 'bg-[#ccff00] text-black font-bold shadow-sm'
                : 'bg-[#f3f4f6] text-gray-700 hover:bg-gray-200'
            }`;
    };

    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-10">
                    Discover Your Passion, <br />
                    Build Your Skills
                </h2>

                {/* Subtitle */}
               
                <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-14 font-normal">
                    At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                </p>

                {/* Categories Grid Container - Fixed 3 Rows Layout */}
                <div className="flex flex-col items-center gap-5 w-full">

                    {/* Row 1: 8 Items */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-5 w-full">
                        {['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'].map((item) => (
                            <button key={item} onClick={() => setActiveCategory(item)} className={getBtnClass(item)}>
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Row 2: 6 Items */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-5 w-full">
                        {['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'].map((item) => (
                            <button key={item} onClick={() => setActiveCategory(item)} className={getBtnClass(item)}>
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Row 3: 4 Items + More Button */}
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 w-full">
                        {['Productivity', 'Web Development', 'Data Science', 'Cooking'].map((item) => (
                            <button key={item} onClick={() => setActiveCategory(item)} className={getBtnClass(item)}>
                                {item}
                            </button>
                        ))}

                        <button className="px-4 py-2.5 text-sm font-bold text-blue-600 hover:text-blue-700 cursor-pointer whitespace-nowrap">
                            + More
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
