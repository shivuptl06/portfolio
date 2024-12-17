// import React from 'react';

const projects = [
  {
    title: 'Blog App',
    description: 'A full-stack blog app using React and MySQL.',
    link: '#',
  },
  {
    title: 'Weather App',
    description: 'A Flutter app to check real-time weather updates.',
    link: '#',
  },
  {
    title: 'Programming Language Project',
    description: 'A custom programming language for educational purposes.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-100" id="projects">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
