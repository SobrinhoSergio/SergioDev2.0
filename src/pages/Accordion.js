import React, { useState } from 'react';

const ExperienceAccordion = ({ experiences, darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionBgClass = darkMode ? 'bg-zinc-900' : 'bg-gray-200';
  const textClass = darkMode ? 'text-gray-200' : 'text-gray-600';
  const blueIconBgClass = 'bg-blue-500 rounded-full p-1'; // Classe para o background color arredondado

  return (
    <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div key={index} className={`p-4 rounded-md ${accordionBgClass}`}>
            <button
              className={`flex justify-between items-center w-full focus:outline-none ${textClass}`}
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg font-semibold text-center">{experience.title}</h2>
              <div className={blueIconBgClass}>
                <svg
                  className={`w-5 h-5 transition-transform transform ${
                    index === activeIndex ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            {index === activeIndex && (
              <div className={`mt-2 ${textClass}`}>
                <p>{experience.description}</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default ExperienceAccordion;
