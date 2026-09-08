import React from 'react'

const Achivement = () => {
    const achievements = [
    {
      title: "Web Development Certificate",
      organization: "Online Course",
      year: "2026",
      description:
        "Completed a web development course covering HTML, CSS, JavaScript and modern frontend technologies.",
    },
    {
      title: "React Development",
      organization: "Online Learning Platform",
      year: "2026",
      description:
        "Completed React learning and built several practical projects using modern React concepts.",
    },
    {
      title: "Programming Achievement",
      organization: "University",
      year: "2026",
      description:
        "Participated in programming activities and improved practical problem-solving skills.",
    },
  ];
  return (
     <section id="achievements" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold text-lg">
            My Accomplishments
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Achievements & Certificates
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >

              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-5">
                🏆
              </div>

              <span className="text-blue-600 font-semibold text-sm">
                {item.year}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-2">
                {item.title}
              </h3>

              <p className="text-gray-700 font-medium mt-2">
                {item.organization}
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Achivement