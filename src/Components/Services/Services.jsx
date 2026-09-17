import React from 'react'

const Services = () => {
     const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Building responsive and interactive websites using React, JavaScript, HTML and CSS.",
    },
    {
      icon: "🎨",
      title: "UI Development",
      description:
        "Creating clean, modern and user-friendly interfaces with Tailwind CSS and responsive design.",
    },
    {
      icon: "⚙️",
      title: "Web Application",
      description:
        "Developing practical web applications with reusable React components and dynamic functionality.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Making websites work smoothly across mobile, tablet and desktop devices.",
    },
    {
      icon: "🔧",
      title: "Problem Solving",
      description:
        "Solving programming and development problems using logical thinking and clean code.",
    },
    {
      icon: "🚀",
      title: "Performance & UX",
      description:
        "Improving usability, layout structure and overall user experience of web applications.",
    },
  ];
  return (
    <section id="services" className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold text-lg">
            What I Can Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            My Services
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            I focus on creating modern, responsive and practical
            web experiences using modern frontend technologies.
          </p>

        </div>


        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-white p-7 rounded-2xl border border-gray-100
              hover:border-blue-200 hover:-translate-y-2
              hover:shadow-xl transition duration-300"
            >

              <div className="w-14 h-14 flex items-center justify-center
              rounded-xl bg-blue-50 text-3xl mb-5
              group-hover:bg-blue-600 group-hover:scale-110
              transition duration-300">

                {service.icon}

              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-5 text-blue-600 font-semibold text-sm">
                Learn More →
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
  
}

export default Services