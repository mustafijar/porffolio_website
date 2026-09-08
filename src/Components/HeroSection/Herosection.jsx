import React from 'react'
import img from "../../assets/profile_pic.png"

const Herosection = () => {
  return (
<section id="home" className="min-h-screen flex items-center bg-white">

      <div className="max-w-7xl mx-auto px-6 py-16 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            <p className="text-blue-600 text-lg font-semibold mb-3">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Mustafijar
              <br />
              Rahaman Moon
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
              Full Stack Develope
            </h2>

            <p className="text-gray-600 text-lg mt-5 max-w-xl leading-relaxed">
              I am a passionate developer who loves creating modern,
              responsive and user-friendly web applications using
              React, JavaScript and Tailwind CSS.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="border border-gray-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Contact Me
              </a>

            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-8">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-blue-100 shadow-xl">

              <img
                src={img}
                alt="Profile"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section> 
)
}

export default Herosection