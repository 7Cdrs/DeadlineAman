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

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white text-center">
      <h2 
        data-aos="fade-down"
        data-aos-duration="800"
        className="text-4xl font-bold text-[#38b6ff] mb-12"
      >
        Tim Kami
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {team.map((person, index) => (
          <div
            key={person.name}
            data-aos="flip-up"
            data-aos-delay={index * 200}
            data-aos-duration="1000"
            className="bg-white/80 backdrop-blur-md border border-[#38b6ff]/20 rounded-3xl shadow-lg p-8 w-80 hover:shadow-2xl hover:border-[#38b6ff]/40 transition duration-500 transform hover:-translate-y-2"
          >
            <div className="relative">
              <img
                data-aos="zoom-in"
                data-aos-delay={index * 200 + 300}
                data-aos-duration="800"
                src={person.image}
                alt={person.name}
                className="w-48 h-48 mx-auto rounded-full border-4 border-[#38b6ff] object-cover shadow-md hover:scale-105 transition-transform duration-500"
              />
              <div 
                data-aos="fade-in"
                data-aos-delay={index * 200 + 600}
                data-aos-duration="500"
                className="absolute bottom-2 right-8 w-6 h-6 bg-green-500 border-2 border-white rounded-full"
              ></div>
            </div>
            <h3 
              data-aos="fade-up"
              data-aos-delay={index * 200 + 400}
              data-aos-duration="700"
              className="text-2xl font-semibold text-[#38b6ff] mt-6"
            >
              {person.name}
            </h3>
            <p 
              data-aos="fade-up"
              data-aos-delay={index * 200 + 500}
              data-aos-duration="700"
              className="text-gray-600 mt-2 text-lg"
            >
              {person.role}
            </p>
          </div>
        ))}
      </div>

      <div 
        data-aos="zoom-in"
        data-aos-delay="800"
        data-aos-duration="600"
        className="w-28 h-1 bg-gradient-to-r from-[#38b6ff] to-[#2a9de6] mx-auto mt-16 rounded-full"
      ></div>
    </section>
  );
}