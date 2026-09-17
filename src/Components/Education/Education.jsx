import React from 'react'

const Education = () => {
     const education = [
    {
      degree: "Bachelor's Degree",
      institution: "Southeast University",
      subject: "Computer Science & Engineering",
      year: "2023 - Present",
      description:
        "Currently pursuing my bachelor's degree and developing strong knowledge in programming, software development and computer science.",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Collectorate School and College",
      subject: "Science",
      year: "2020 - 2022",
      description:
        "Completed higher secondary education with a strong interest in technology and programming.",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Bir Uttam Shaheed Samad High School",
      subject: "Science",
      year: "2018 - 2020",
      description:
        "Completed secondary education and developed an early interest in technology.",
    },
  ];
  return (
 <section id="education" className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold text-lg">
            My Academic Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Education
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-200 ml-4">

          {education.map((item, index) => (
            <div key={index} className="mb-12 ml-8 relative">

              {/* Circle */}
              <div className="absolute-left-[42px] top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow"></div>

              {/* Card */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition">

                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold text-gray-900">
                  {item.degree}
                </h3>

                <h4 className="text-lg font-semibold text-blue-600 mt-2">
                  {item.institution}
                </h4>

                <p className="text-gray-700 mt-2">
                  {item.subject}
                </p>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Education