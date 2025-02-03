import React from 'react';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'HTML & CSS', level: 'Advanced' },
  { name: 'Git', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <div className=" bg-gray-600 p-0">
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="max-w-4xl w-full bg-gray-300 shadow-lg rounded-2xl p-8">
            <span className="text-xl font-semibold text-gray-800">{skill.name}</span>
            <span className="text-sm text-gray-600">{skill.level}</span>
          </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;
