import React, { useState } from "react";

const Interactive = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const [selectedSkill, setSelectedSkill] = useState("React");

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Java",
  ];

  // Discount Calculation
  const checkDiscount = () => {
    const price = Number(amount);

    if (!price || price <= 0) {
      setResult({
        type: "error",
        message: "Please enter a valid amount.",
      });
    } else if (price > 5000) {
      const discount = (price * 15) / 100;
      const finalPrice = price - discount;

      setResult({
        type: "success",
        message: "15% Discount Applied",
        original: price,
        discount: discount,
        finalPrice: finalPrice,
      });
    } else {
      setResult({
        type: "normal",
        message: "No Discount",
        original: price,
        finalPrice: price,
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-lg">
            Interactive Section
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            JavaScript <span className="text-blue-600">Lab</span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            A small interactive demonstration using input,
            events, conditions and dynamic UI updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Discount Calculator */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                🧮
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Discount Calculator
                </h3>

                <p className="text-gray-500 text-sm">
                  Try the condition logic
                </p>
              </div>
            </div>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter purchase amount"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-blue-600 mb-4"
            />

            <button
              onClick={checkDiscount}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Check Discount
            </button>

            {/* Dynamic Result */}
            {result && (
              <div
                className={`mt-5 p-5 rounded-xl border ${
                  result.type === "success"
                    ? "bg-green-50 border-green-200"
                    : result.type === "error"
                    ? "bg-red-50 border-red-200"
                    : "bg-blue-50 border-blue-200"
                }`}
              >
                <h4 className="font-bold text-gray-900">
                  {result.message}
                </h4>

                {result.original !== undefined && (
                  <p className="text-gray-600 mt-2">
                    Original Price: ৳{result.original.toFixed(2)}
                  </p>
                )}

                {result.discount !== undefined && (
                  <p className="text-green-600">
                    Discount: ৳{result.discount.toFixed(2)}
                  </p>
                )}

                {result.finalPrice !== undefined && (
                  <p className="text-lg font-bold text-blue-600 mt-1">
                    Final Price: ৳{result.finalPrice.toFixed(2)}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Skill Selector */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-2xl">
                ⚡
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Explore My Skills
                </h3>

                <p className="text-gray-400 text-sm">
                  Click a technology
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-3 rounded-xl border transition ${
                    selectedSkill === skill
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-700 text-gray-300 hover:border-blue-500"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            {/* Condition */}
            <div className="mt-7 p-5 bg-gray-800 rounded-xl">
              <p className="text-gray-400 text-sm">
                Selected Technology
              </p>

              <h4 className="text-2xl font-bold text-blue-400 mt-1">
                {selectedSkill}
              </h4>

              {selectedSkill === "React" ? (
                <p className="text-gray-300 mt-2">
                  My primary frontend library for building
                  component-based interfaces.
                </p>
              ) : (
                <p className="text-gray-300 mt-2">
                  One of the technologies I use while learning
                  and building projects.
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Interactive;