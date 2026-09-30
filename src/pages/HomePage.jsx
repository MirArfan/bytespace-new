import Categories from "../components/Categories";
import CourseGrid from "../components/CourseGrid";
import CourseStage from "../components/CourseStage";
import FeatureSections from "../components/FeatureSections";
import HeroContent from "../components/HeroContent";
import LearningPaths from "../components/LearningPaths";
import LogoStrip from "../components/LogoStrip";
import Navbar from "../components/Navbar";


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
    </main>
  );
}