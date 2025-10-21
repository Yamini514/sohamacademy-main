import React from "react";

const highlights = [
  {
    title: "Hands-On Training",
    description:
      "This is an experiential training on Robotics (Arduino UNO platform) provided to high school students of public & private institutions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.6}
        stroke="currentColor"
        className="w-8 h-8 text-sky-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Experienced Engineers",
    description:
      "We have the necessary experience in training hundreds of students at a time and also working with multiple schools simultaneously.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.6}
        stroke="currentColor"
        className="w-8 h-8 text-sky-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm-6 8v-1a4 4 0 014-4h4a4 4 0 014 4v1"
        />
      </svg>
    ),
  },
  {
    title: "Creative Robotics Projects",
    description:
      "Children will complete 21 activities that make use of various types of sensors, motors, displays and other accessories.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.6}
        stroke="currentColor"
        className="w-8 h-8 text-sky-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20l9-5-9-5-9 5 9 5zm0-10V4m0 0l9 5m-9-5L3 9"
        />
      </svg>
    ),
  },
  {
    title: "School Robotics Clubs",
    description:
      "Once the training is completed, we organize Robotics Clubs in each of the schools and nurture them with new innovative programs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.6}
        stroke="currentColor"
        className="w-8 h-8 text-sky-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    ),
  },
];

const ProgramHighlights = () => {
  return (
    <section
      id="program-highlights"
      className=" bg-white text-center "
       style={{
    backgroundImage: `url('https://ria.sohamacademy.org/wp-content/uploads/2022/01/RiA_54-768x512.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'overlay',
    backgroundColor: 'rgba(255,255,255,0.6)' // 80% transparency
  }}
    >
      <div className="max-w-7xl mt-3 mx-auto px-6 py-10">
        {/* Section Heading */}
       
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
          Our Program Highlights
        </h2>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm p-8 transition-all duration-300 hover:border-sky-400 hover:shadow-[0_8px_30px_rgba(0,183,255,0.15)] hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-50 mb-5 transition-all duration-300 group-hover:ring-4 group-hover:ring-sky-100">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
