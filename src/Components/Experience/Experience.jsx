import React from 'react'

const Experience = () => {
     const experiences = [
    {
      role: "Frontend Developer",
      company: "Personal Projects",
      duration: "2025 - Present",
      description:
        "Developing responsive and user-friendly websites using React, JavaScript, Tailwind CSS and modern frontend technologies.",
    },
    {
      role: "Web Development Learner",
      company: "Self Learning",
      duration: "2024 - Present",
      description:
        "Learning modern web development, practicing real-world projects and improving problem-solving and programming skills.",
    },
  ];

  return (
   <section id="experience" className="py-20 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold text-lg">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Experience
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

        </div>

        {/* Experience Cards */}
        <div className="space-y-6">

          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                <div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {experience.role}
                  </h3>

                  <p className="text-blue-600 font-semibold mt-1">
                    {experience.company}
                  </p>

                </div>

                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold w-fit">
                  {experience.duration}
                </span>

              </div>

              <p className="text-gray-600 leading-relaxed mt-5">
                {experience.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  
  )
}

export default Experience