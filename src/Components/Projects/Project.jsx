import React from 'react'

const Project = () => {
     const projects = [
    {
      title: "Tour Guide Management System",
      description:
        "A modern tourism website where users can explore beautiful tourist destinations and manage their travel plans.",
      technologies: "React • Tailwind CSS • JavaScript",
      image: "https://via.placeholder.com/600x350",
      github: "https://github.com/",
      live: "https://example.com/",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website designed to showcase my skills, projects and professional journey.",
      technologies: "React • Tailwind CSS • DaisyUI",
      image: "https://via.placeholder.com/600x350",
      github: "https://github.com/",
      live: "https://example.com/",
    },
    {
      title: "Student Management System",
      description:
        "A simple management system for handling student information, records and academic data.",
      technologies: "Java • MySQL • Spring Boot",
      image: "https://via.placeholder.com/600x350",
      github: "https://github.com/",
      live: "https://example.com/",
    },
    {
  title: "E-Commerce Website",
  description:
    "A responsive online shopping platform where users can browse products, view product details and manage their shopping cart.",
  technologies: "React • JavaScript • Tailwind CSS",
  image: "https://via.placeholder.com/600x350",
  github: "https://github.com/",
  live: "https://example.com/",
},
{
  title: "Hospital Management System",
  description:
    "A management system designed to handle patients, doctors, appointments and other hospital-related information.",
  technologies: "Java • MySQL • Spring Boot",
  image: "https://via.placeholder.com/600x350",
  github: "https://github.com/",
  live: "https://example.com/",
},
{
  title: "Weather Application",
  description:
    "A weather application that allows users to search for a city and view current weather information using an external API.",
  technologies: "JavaScript • HTML • CSS • Weather API",
  image: "https://via.placeholder.com/600x350",
  github: "https://github.com/",
  live: "https://example.com/",
},
  ];
  return (
   <section id="projects" className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold text-lg">
            My Recent Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Projects
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className="text-blue-600 font-medium text-sm mb-6">
                  {project.technologies}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
)
}

export default Project