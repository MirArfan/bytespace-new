import FloatingCard from "./FloatingCard";
import StudentIllustration from "./StudentIllustration";

export default function CourseStage() {
  return (
    <div className="course-stage" id="courses">
      <div className="stage-glow" />
      <StudentIllustration />

      <FloatingCard className="design-card">
        <strong>UI/UX Design</strong>
        <small>200 Courses · 1000+ Students</small>
      </FloatingCard>

      <FloatingCard className="progress-card">
        <small>Learning Progress</small>
        <strong>55%</strong>
        <span className="progress-bar"><i /></span>
      </FloatingCard>

      <FloatingCard className="happy-card">
        <small>Happy Students</small>
        <span>4.5/5.0 <b>★</b></span>
        <div className="avatars">
          <i /><i /><i /><i />
          <em>2K+</em>
        </div>
      </FloatingCard>
    </div>
  );
}