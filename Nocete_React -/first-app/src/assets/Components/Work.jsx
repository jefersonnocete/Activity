import React from 'react';

const workExperience = [

  {
    title: ' Student Web Developer ',
    company: 'N/A',
    duration: 'feb 2025 - feb 01/2025',
    description: 'Assisted in the development of client websites, writing clean, scalable code using JavaScript and WordPress.',
  },
  {
    title: ' Student Junior Software Developer',
    company: 'CreativeTech Inc.',
    duration: 'feb 2025 ',
    description: 'Worked on the back-end development of internal tools using Node.js and Express, and helped improve database performance.',
  },
];

const WorkExperience = () => {
  return (
    <div className="  bg-gray-600 p-10">
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Work Experience</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workExperience.map((experience, index) => (
          <div
            key={index}
            className="p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-600"
          >
            <div className="max-w-4xl w-full bg-gray-300 shadow-lg rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
            <p className="text-gray-600 font-medium">{experience.company}</p>
            <p className="text-gray-500 italic">{experience.duration}</p>
            <p className="mt-4 text-gray-700">{experience.description}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WorkExperience;
