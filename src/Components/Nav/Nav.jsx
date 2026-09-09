import React from 'react'

const Nav = () => {
  return (
   <nav className="w-full bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            Moon<span className="text-black">.</span>
          </h1>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#home"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Projects
          </a>

          <a
            href="#education"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </a>

        </div>

        {/* Hire Me Button */}
        <div className="hidden md:block">

          <a
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Nav