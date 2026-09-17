import React from "react";

const CurrentlyLearning = () => {

  const learningItems = [
    {
      title: "Advanced React",
      progress: "70%",
      icon: "⚛️",
      description:
        "Learning reusable components, hooks, state management and better React architecture.",
    },
    {
      title: "Backend Development",
      progress: "45%",
      icon: "🛠️",
      description:
        "Exploring Node.js, Express and database integration for full-stack development.",
    },
    {
      title: "Problem Solving",
      progress: "60%",
      icon: "🧠",
      description:
        "Practicing algorithms, data structures and programming problems.",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold text-lg">
            Growth & Development
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Currently Learning
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {learningItems.map((item, index) => (

            <div
              key={index}
              className="bg-gray-50 p-7 rounded-2xl
              border border-gray-100
              hover:-translate-y-2 hover:shadow-xl
              transition duration-300"
            >

              <div className="flex items-center justify-between">

                <div className="text-4xl">
                  {item.icon}
                </div>

                <span className="text-blue-600 font-bold">
                  {item.progress}
                </span>

              </div>


              <h3 className="text-xl font-bold text-gray-900 mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {item.description}
              </p>


              <div className="mt-5">

                <div className="w-full bg-gray-200 rounded-full h-2">

                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: item.progress,
                    }}
                  ></div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CurrentlyLearning;