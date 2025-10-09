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
      <h2 className="text-4xl font-bold text-blue-800 mb-12">
        Tim Kami
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {team.map((person) => (
          <div
            key={person.name}
            className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-3xl shadow-lg p-8 w-80 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
          >
            <div className="relative">
              <img
                src={person.image}
                alt={person.name}
                className="w-48 h-48 mx-auto rounded-full border-4 border-blue-600 object-cover shadow-md hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 right-8 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mt-6">
              {person.name}
            </h3>
            <p className="text-gray-600 mt-2 text-lg">{person.role}</p>
          </div>
        ))}
      </div>

      {/* garis bawah hiasan */}
      <div className="w-28 h-1 bg-blue-600 mx-auto mt-16 rounded-full"></div>
    </section>
  );
}
