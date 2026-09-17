import React from 'react'

const TechStack = () => {
    const technologies = [
    {
      name: "HTML5",
      icon: "🌐",
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: "🎨",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      category: "Language",
    },
    {
      name: "React",
      icon: "⚛️",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "💨",
      category: "UI",
    },
    {
      name: "Java",
      icon: "☕",
      category: "Programming",
    },
    {
      name: "Spring Boot",
      icon: "🌱",
      category: "Backend",
    },
    {
      name: "MySQL",
      icon: "🗄️",
      category: "Database",
    },
    {
      name: "Git & GitHub",
      icon: "🔀",
      category: "Tools",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-blue-600 font-semibold text-lg">
            My Development Toolkit
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Technologies I Use
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

          {technologies.map((tech, index) => (

            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100
              bg-gray-50 text-center
              hover:bg-blue-600 hover:text-white
              hover:-translate-y-2 hover:shadow-xl
              transition duration-300"
            >

              <div className="text-4xl mb-3 group-hover:scale-110 transition">
                {tech.icon}
              </div>

              <h3 className="font-bold text-gray-900 group-hover:text-white">
                {tech.name}
              </h3>

              <p className="text-xs text-gray-500 mt-1 group-hover:text-blue-100">
                {tech.category}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TechStack