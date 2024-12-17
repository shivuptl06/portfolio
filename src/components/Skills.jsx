import { LazyLoadComponent } from "react-lazy-load-image-component";
import "animate.css";

const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "C#",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "TailwindCSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "UX Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const Skills = () => {
  return (
    <LazyLoadComponent>
      <section className="py-16 mx-10 animate__animated animate__fadeIn" id="skills">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center animate__animated animate__fadeInUp"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-16 w-16 mb-2"
                />
                <p className="text-lg font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LazyLoadComponent>
  );
};

export default Skills;
