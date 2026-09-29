import studentImg from '../assets/student_pic.png'; 

export default function StudentIllustration() {
  return (
    <div className="student" aria-hidden="true">
      <img src={studentImg} alt="Student Illustration" className="student-img" />
    </div>
  );
}