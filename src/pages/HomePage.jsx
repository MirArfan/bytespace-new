import Categories from "../components/Categories";
import CourseGrid from "../components/CourseGrid";
import CourseStage from "../components/CourseStage";
import CreatorBanner from "../components/CreatorBanner";
import FeatureSections from "../components/FeatureSections";
import Footer from "../components/Footer";
import HeroContent from "../components/HeroContent";
import LearningPaths from "../components/LearningPaths";
import LogoStrip from "../components/LogoStrip";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";


export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero" id="home">
        {/* Background Visual Elements */}
        <div className="grid-lines" aria-hidden="true" />
        <div className="lime-blob blob-left" aria-hidden="true" />
        <div className="lime-blob blob-right" aria-hidden="true" />
        <div className="lime-blob blob-bottom" aria-hidden="true" />
        <div className="scribble scribble-left" aria-hidden="true" />
        <div className="scribble scribble-right" aria-hidden="true" />
        <div className="white-ring" aria-hidden="true" />
        <div className="white-triangle" aria-hidden="true" />

        {/* Modular Sections */}
        <Navbar />
        <HeroContent />
        <CourseStage />
      </section>
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