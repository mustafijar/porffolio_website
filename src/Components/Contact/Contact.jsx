import React from 'react'

const Contact = () => {
  return (
 <section id="contact" className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold text-lg">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Contact Me
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

          <p className="text-gray-600 mt-5">
            Have a project or opportunity? Feel free to contact me.
          </p>

        </div>

        {/* Contact Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-blue-600 text-white p-8 rounded-2xl">

            <h3 className="text-3xl font-bold mb-6">
              Let's Talk
            </h3>

            <p className="text-blue-100 leading-relaxed mb-8">
              I'm always interested in discussing new projects,
              creative ideas and opportunities.
            </p>

            <div className="space-y-5">

              <div>
                <p className="text-blue-200 text-sm">
                  Email
                </p>

                <p className="font-semibold">
                 mustafijarrahanammoon@gmail.com
                </p>
              </div>

              <div>
                <p className="text-blue-200 text-sm">
                  Phone
                </p>

                <p className="font-semibold">
                  01796060725
                </p>
              </div>

              <div>
                <p className="text-blue-200 text-sm">
                  Location
                </p>

                <p className="font-semibold">
                 Dhaka,Bangladesh
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

            <form className="space-y-5">

              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
                />

              </div>

              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
                />

              </div>

              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
                ></textarea>

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact