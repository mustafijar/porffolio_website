import React from 'react'

const Footer = () => {
  return (
  <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo / About */}
          <div>

            <h2 className="text-3xl font-bold text-blue-500">
              Moon.
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A passionate Frontend Developer focused on building
              modern, responsive and user-friendly web applications.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="#home"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-gray-400 hover:text-white transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>

            </div>

          </div>

          {/* Social Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">

          <p className="text-gray-400">
            © 2026 Mustafijar Rahaman Moon. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer