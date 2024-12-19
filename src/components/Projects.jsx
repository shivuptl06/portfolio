import { useState } from "react";
import "animate.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import BlogAppImage from "../assets/BlogApp.png";
import EcommerceAppImage from "../assets/EcommerceApp.png";
import MusicPlayerAppImage from "../assets/MusicPlayerApp.png";
import WeatherAppImage from "../assets/WeatherApp.png";

const projects = [
  {
    title: "Blog App",
    description:
      "A full-stack blog app using the MERN stack with features like user authentication, profile management, CRUD operations for posts, and Cloudinary integration for media storage.",
    details: `This project is a feature-rich blogging platform where users can register, 
      create posts, and interact with others' content. It uses MongoDB for data storage, 
      Express.js for server-side logic, React for the frontend, and Node.js for the backend. 
      It also integrates Cloudinary for image hosting.`,
    link: "https://blogapp-prodfrontend.vercel.app/login",
    github: "https://github.com/shivuptl06/blogapp-prod.git",
    image: BlogAppImage,
  },
  {
    title: "E-commerce Product Catalog",
    description:
      "A responsive eCommerce platform using React and Tailwind CSS with dynamic cart, discount coupon functionality, and integration with the Fake Store API.",
    details: `This app simulates an e-commerce experience with features like adding items 
      to the cart, applying discounts, and fetching products dynamically from the Fake Store API. 
      It focuses on user-friendly design and real-time interactivity.`,
    link: "https://ecommerce-webapp-pi-gray.vercel.app/",
    github: "https://github.com/shivuptl06/ecommerce.git",
    image: EcommerceAppImage,
  },
  {
    title: "Online Music Player",
    description:
      "A minimal music player integrated with Deezer API, allowing users to search for songs, artists, and albums, and preview them.",
    details: `This project provides a seamless music discovery experience by integrating 
      the Deezer API. Users can search for their favorite artists or songs and listen to previews. 
      The app also showcases responsive design principles.`,
    link: "https://online-music-preview.netlify.app/",
    github: "",
    image: MusicPlayerAppImage,
  },
  {
    title: "Weather Dashboard Application",
    description:
      "A weather dashboard built with React and Tailwind CSS, integrating OpenWeather and Unsplash APIs to provide real-time data and dynamic visuals.",
    details: `The weather dashboard offers real-time weather updates with a visually appealing 
      design powered by Unsplash for dynamic background images. Users can search for any city 
      worldwide to get accurate weather details.`,
    link: "https://weather-finder-web.vercel.app/",
    github: "https://github.com/shivuptl06/weather-app-v2.git",
    image: WeatherAppImage,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className="py-16 bg-gray-100 animate__animated animate__fadeIn"
      id="projects"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <LazyLoadComponent key={index}>
              <div className="bg-white shadow-md rounded-lg p-6 max-w-[90%] mx-auto flex flex-col md:flex-row items-center space-x-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-1/2 h-auto mb-4 md:mb-0 rounded-lg"
                />
                <div className="text-left md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => setSelectedProject(project)}
                    >
                      Read More
                    </button>
                    <a
                      href={project.link}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </LazyLoadComponent>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedProject(null)} // Close on outside click
        >
          <div
            className="bg-white rounded-lg p-6 max-w-4xl w-full relative mx-4 md:mx-0"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center">
              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0"
              />
              {/* Description */}
              <div className="md:ml-6 md:w-1/2 text-left">
                <h3 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  {selectedProject.details}
                </p>
              </div>
            </div>
            {/* Links */}
            <div className="flex justify-between items-center mt-6">
              <a
                href={selectedProject.github}
                className="text-blue-500 text-lg hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Code
              </a>
              <a
                href={selectedProject.link}
                className="text-blue-500 text-lg hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
