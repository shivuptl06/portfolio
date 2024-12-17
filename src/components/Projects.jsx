import "animate.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const projects = [
  {
    title: "Blog App",
    description:
      "A full-stack blog app using the MERN stack with features like user authentication, profile management, CRUD operations for posts, and Cloudinary integration for media storage.",
    link: "https://blogapp-prodfrontend.vercel.app/login",
    image: "../assets/BlogApp.png", // Replace with actual image
  },
  {
    title: "E-commerce Product Catalog",
    description:
      "A responsive eCommerce platform using React and Tailwind CSS with dynamic cart, discount coupon functionality, and integration with the Fake Store API.",
    link: "https://ecommerce-webapp-pi-gray.vercel.app/",
    image: "../assets/EcommerceApp.png", // Replace with actual image
  },
  {
    title: "Online Music Player",
    description:
      "A minimal music player integrated with Deezer API, allowing users to search for songs, artists, and albums, and preview them.",
    link: "https://online-music-preview.netlify.app/",
    image: "../assets/MusicPlayerApp.png", // Replace with actual image
  },
  {
    title: "Weather Dashboard Application",
    description:
      "A weather dashboard built with React and Tailwind CSS, integrating OpenWeather and Unsplash APIs to provide real-time data and dynamic visuals.",
    link: "https://weather-finder-web.vercel.app/",
    image: "../assets/WeatherApp.png", // Replace with actual image
  },
];

const Projects = () => {
  return (
    <section
      className="py-16 bg-gray-100 animate__animated animate__fadeIn"
      id="projects"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
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
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </LazyLoadComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
