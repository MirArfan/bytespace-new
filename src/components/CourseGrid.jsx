import CourseCard from "./CourseCard"; 

import courseImg1 from "../assets/course-1.jpg";
import courseImg2 from "../assets/course-2.jpg";
import courseImg3 from "../assets/course-3.jpg";
import courseImg4 from "../assets/course-4.jpg";
import courseImg5 from "../assets/course-5.jpg";
import courseImg6 from "../assets/course-6.jpg";

import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse4 from "../assets/Ellipse4.png";

const avatarsList = [Ellipse1, Ellipse2, Ellipse3, Ellipse4];

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
        {/* Responsive Grid with Reusable CourseCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              avatars={avatarsList}
              compact={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}