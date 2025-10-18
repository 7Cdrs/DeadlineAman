import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProfileSection() {
  const team = [
    {
      name: "Hazel MpR",
      role: "Fullstack Developer",
      image: "/profile.jpg",
    },
    {
      name: "Zhulva Abhipraya",
      role: "Frontend Developer",
      image: "/abhi.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#38b6ff]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-[#2a9de6]/10 rounded-full blur-3xl"></div>

      <h2
        className="text-4xl md:text-5xl font-bold text-[#38b6ff] mb-12 relative z-10"
        data-aos="fade-down"
      >
        Our Team
      </h2>
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-10 relative z-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {team.map((person, index) => (
          <div
            key={person.name}
            className="bg-white/80 backdrop-blur-md border border-[#38b6ff]/20 rounded-3xl shadow-lg p-8 w-72 sm:w-80 
                       hover:shadow-2xl hover:border-[#38b6ff]/40 transition duration-500 transform hover:-translate-y-2"
            data-aos="zoom-in-up"
            data-aos-delay={index * 200}
          >
            <div className="relative flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#38b6ff] shadow-md">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 right-14 w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
            </div>

            <h3 className="text-2xl font-semibold text-[#38b6ff] mt-6">
              {person.name}
            </h3>
            <p className="text-gray-600 mt-2 text-lg">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
