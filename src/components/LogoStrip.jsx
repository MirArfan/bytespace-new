import waveImg from "../assets/logos/wave.png";
import sunImg from "../assets/logos/sun.png";
import boltImg from "../assets/logos/bolt.png";
import usersImg from "../assets/logos/user.png";
import circleImg from "../assets/logos/circle.png";

const logos = [
  { icon: waveImg, label: "Logipsum" },
  { icon: sunImg, label: "Logipsum" },
  { icon: boltImg, label: "Logipsum" },
  { icon: usersImg, label: "Logipsum" },
  { icon: circleImg, label: "Logipsum" },
];


export default function LogoStrip() {
  return (
    <section 
      className="w-full py-16 px-4 flex justify-center bg-[#f9f9ef]" 
      id="creators" 
      aria-label="Featured partners"
    >
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20 max-w-7xl w-full">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3.5 px-3 py-2
                       opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          >
            <img
              src={logo.icon}
              alt={`${logo.label} logo`}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
            />
            <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
              {logo.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}