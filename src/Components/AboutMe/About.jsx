import React from 'react'

const About = () => {
  return (
 <section id="about" className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">

          <p className="text-blue-600 font-semibold text-lg">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              I'm Mustafijar Rahaman Moon
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
             I am a passionate Full Stack Developer who enjoys creating modern, responsive, and user-friendly websites and web applications.
I have experience working with HTML, CSS, JavaScript, React, Tailwind CSS, Java, Node.js, MongoDB, and other modern frontend and backend technologies. I always try to learn new technologies and improve my development skills.
My goal is to build useful, attractive, and efficient digital experiences while continuously growing as a developer and expanding my knowledge of frontend and backend development.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              I have experience working with HTML, CSS, JavaScript,
              React, Tailwind CSS and other modern web technologies.
              I always try to learn new technologies and improve my
              development skills.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              My goal is to build useful and attractive digital
              experiences while continuously growing as a developer.
            </p>

          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">

              <h3 className="text-3xl font-bold text-blue-600">
                20+
              </h3>

              <p className="text-gray-600 mt-2">
                Projects Completed
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">

              <h3 className="text-3xl font-bold text-blue-600">
                10+
              </h3>

              <p className="text-gray-600 mt-2">
                Technologies
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">

              <h3 className="text-3xl font-bold text-blue-600">
                2+
              </h3>

              <p className="text-gray-600 mt-2">
                Years Learning
              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">

              <h3 className="text-3xl font-bold text-blue-600">
                100%
              </h3>

              <p className="text-gray-600 mt-2">
                Passion
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About