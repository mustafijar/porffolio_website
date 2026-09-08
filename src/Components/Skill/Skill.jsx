import React from 'react'

const Skill = () => {
    const skills = [
    {
      name: "HTML",
      level: "90%",
      description: "Semantic and structured web development",
    },
    {
      name: "CSS",
      level: "85%",
      description: "Responsive and modern UI design",
    },
    {
      name: "JavaScript",
      level: "80%",
      description: "Interactive and dynamic web applications",
    },
    {
      name: "React",
      level: "80%",
      description: "Component-based frontend development",
    },
    {
      name: "Tailwind CSS",
      level: "85%",
      description: "Fast and responsive UI development",
    },
    {
      name: "Java",
      level: "70%",
      description: "Object-oriented programming",
    },
  ];
  return (
   <section id="skills" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold text-lg">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Skills
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Here are some of the technologies and tools I use to
            create modern and responsive web applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300"
            >

              <div className="flex justify-between items-center mb-3">

                <h3 className="text-xl font-bold text-gray-900">
                  {skill.name}
                </h3>

                <span className="text-blue-600 font-semibold">
                  {skill.level}
                </span>

              </div>

              <p className="text-gray-600 mb-4">
                {skill.description}
              </p>

              <div className="w-full bg-gray-200 rounded-full h-2">

                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: skill.level }}
                ></div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
)
}

export default Skill