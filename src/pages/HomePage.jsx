import Categories from "../components/Categories";
import CourseGrid from "../components/CourseGrid";
import CreatorBanner from "../components/CreatorBanner";
import FeatureSections from "../components/FeatureSections";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LearningPaths from "../components/LearningPaths";
import LogoStrip from "../components/LogoStrip";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";


export default function HomePage() {
  return (
    <main className="site-shell">
     
      <Navbar/>
      <Hero/>
      <LogoStrip />
      <Categories/>
      <CourseGrid/>
      <LearningPaths/>
      <FeatureSections/>
      <CreatorBanner/>
      <Testimonials/>
      <Footer/>
      
    </main>
  );
}