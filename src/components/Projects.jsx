import { useState } from "react";
import "animate.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import BlogAppImage from "../assets/BlogApp.png";
import EcommerceAppImage from "../assets/EcommerceApp.png";
import MusicPlayerAppImage from "../assets/MusicPlayerApp.png";
import WeatherAppImage from "../assets/WeatherApp.png";
import InvoiceApp from "../assets/CSharp.png";

const projects = [
  {
    title: "Blog App",
    description:
      "An advanced blogging platform using the MERN stack, with features like user authentication, profile management, CRUD operations for posts, and Cloudinary integration for media storage.",
    details: `This project is an advanced blogging platform developed using the MERN (MongoDB, Express.js, React, Node.js) stack, designed to facilitate user engagement and content management. The backend is built with Node.js and Express.js, providing a robust framework for handling user authentication, data processing, and API requests.
<br>
      <strong>Key Features</strong>
      <ul>
        <li><strong>User Authentication</strong>: The platform employs JWT (JSON Web Tokens) for secure user authentication, with passwords hashed using bcrypt for enhanced security.</li>
        <li><strong>Profile Management</strong>: Users can register with profile images uploaded to Cloudinary, ensuring efficient storage and management.</li>
        <li><strong>Blog Management</strong>: Users can create, edit, delete, and retrieve blog posts. Each post can include images stored in Cloudinary.</li>
        <li><strong>Social Interaction</strong>: Features such as following and unfollowing other users allow for social connectivity within the platform.</li>
        <li><strong>Search Functionality</strong>: Users can search for other users and their associated blog posts.</li>
        <li><strong>Post Retrieval</strong>: Users can view posts from those they follow, enhancing content discovery.</li>
      </ul>`,

    link: "https://blogapp-prodfrontend.vercel.app/login",
    github: "https://github.com/shivuptl06/blogapp-prod.git",
    image: BlogAppImage,
  },
  {
    title: "E-commerce Product Catalog",
    description:
      "A responsive eCommerce platform using React and Tailwind CSS with dynamic cart, discount coupon functionality, and integration with the Fake Store API.",
    details: `This project is an advanced e-commerce platform developed using React, designed to provide a seamless shopping experience with various interactive features. The application integrates multiple functionalities to enhance user engagement and ensure a smooth buying process.
  
    <br>
    <strong>Key Features</strong>
    <ul>
      <li><strong>Adding Items to the Cart</strong>: Users can browse through a wide range of products and add their desired items to the shopping cart. The cart state is managed globally using the React Context API, allowing users to add, remove, and update items effortlessly.</li>
      <li><strong>Applying Discounts</strong>: The platform allows users to apply discount codes to their purchases, providing an easy way to receive price reductions. The discount logic is handled within the cart context, ensuring accurate and dynamic updates to the cart total.</li>
      <li><strong>Dynamic Product Fetching</strong>: Products are fetched dynamically from the Fake Store API, ensuring that users always have access to the latest product information. This real-time data retrieval keeps the product listings up-to-date and relevant.</li>
      <li><strong>User-Friendly Design</strong>: The application is designed with a focus on usability and responsiveness. Modern design principles and CSS frameworks are employed to create an intuitive and visually appealing interface, ensuring a pleasant user experience across all devices.</li>
      <li><strong>Real-Time Interactivity</strong>: React's state management capabilities are leveraged to provide real-time interactivity. User actions, such as adding items to the cart or applying discounts, trigger immediate updates to the user interface, keeping the application responsive and interactive.</li>
    </ul>
  
    The application employs the React Context API extensively to manage state across different components. By using context providers, the app ensures efficient state management and seamless data sharing, enhancing the overall user experience.`,
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
    details: `This project is a weather forecasting application built using React, designed to provide users with real-time weather information for various cities worldwide. The application incorporates several features to enhance user experience and interactivity.
  
    <br>
    <strong>Key Features</strong>
    <ul>
      <li><strong>Dynamic Background Images</strong>: The application fetches and displays random weather-related images from the Pixabay API, providing a visually appealing background that enhances the user interface.</li>
      <li><strong>City Search with Auto-Suggestions</strong>: Users can search for cities using an auto-suggest feature, which provides dynamic suggestions based on the input. The suggestions are fetched from the OpenWeather Geo API, ensuring accurate city data.</li>
      <li><strong>Real-Time Weather Data</strong>: Upon selecting a city, the application fetches real-time weather data from the OpenWeather API. This includes temperature, humidity, wind speed, and weather conditions, which are displayed to the user.</li>
      <li><strong>Weather Icons</strong>: The application dynamically displays appropriate weather icons based on the current weather conditions (e.g., clear, clouds, drizzle, rain, snow). These icons provide a quick visual representation of the weather.</li>
      <li><strong>User-Friendly Design</strong>: The application features a modern, responsive design with a glassmorphism effect, providing an elegant and intuitive user interface. The use of CSS frameworks and custom styles ensures a polished look.</li>
    </ul>`,
    link: "https://weather-finder-web.vercel.app/",
    github: "https://github.com/shivuptl06/weather-app-v2.git",
    image: WeatherAppImage,
  },

  {
    title: "Schedule Management App",
    description:
      "An ASP.NET Core MVC web app that manages Schedule entities with CRUD functionality, user authentication, and role-based authorization. It includes validation for form inputs, uses jQuery UI for date picking, and integrates reusable components like Tag Helpers and View Components.",
    details: `This project is designed to manage schedules and related entities, including Clinicians and Appointments, providing a comprehensive solution for healthcare scheduling needs. The application leverages ASP.NET Core MVC to deliver robust features and a smooth user experience.
  
    <br>
    <strong>Key Features</strong>
    <ul>
      <li><strong>Schedule Management</strong>: Users can create, view, edit, and delete schedules for various clinicians. The intuitive interface ensures that managing schedule data is straightforward and efficient.</li>
      <li><strong>Clinician Management</strong>: The application allows for detailed management of clinician information. Users can add, update, and remove clinician profiles, ensuring that the scheduling system stays current with the organizational staff.</li>
      <li><strong>Appointment Management</strong>: Users can book, reschedule, and cancel appointments. The app provides real-time updates and notifications to ensure both clinicians and patients are aware of any changes.</li>
      <li><strong>Secure User Access Control</strong>: The application includes secure user authentication and access control features. Users must log in to access the system, and their activities are restricted based on their roles.</li>
      <li><strong>Password Policies</strong>: The app enforces strong password policies to enhance security. This includes requirements for password complexity, expiration, and history, preventing the use of weak or previously used passwords.</li>
      <li><strong>Role-Based Access</strong>: The system employs role-based access control (RBAC), ensuring that users have access only to the features and data relevant to their roles. Administrators, clinicians, and other users each have tailored access levels.</li>
      <li><strong>Data Validation</strong>: Robust validation mechanisms are in place to ensure the integrity of the data entered into the system. This includes client-side and server-side validation to prevent incorrect or incomplete data submissions.</li>
    </ul>
  
    The application leverages ASP.NET Core MVC to provide a structured and maintainable codebase. This framework supports the development of scalable web applications with built-in features for authentication, authorization, and validation.`,
    link: "#",
    github: "https://github.com/shivuptl06/InvoiceTraker.git",
    image: InvoiceApp,
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
            className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-screen overflow-auto relative mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full md:w-1/2 h-auto rounded-lg"
              />
              {/* Description */}
              <div className="md:ml-6 text-left md:w-1/2 overflow-y-auto max-h-96">
                <h3 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <div
                  className="text-gray-700 text-lg mb-6"
                  dangerouslySetInnerHTML={{ __html: selectedProject.details }}
                />
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
