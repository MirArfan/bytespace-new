export default function FloatingCard({ children, className = "" }) {
  return <div className={`floating-card ${className}`}>{children}</div>;
}
