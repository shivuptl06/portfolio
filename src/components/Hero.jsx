import 'animate.css';

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white animate__animated animate__fadeIn">
      <div className="text-center p-4">
        <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeInUp">
          Hi, I&apos;m Shivam Patel
        </h1>
        <p className="text-lg mb-6 animate__animated animate__fadeInUp animate__delay-1s">
          Web Developer | Flutter App Creator | Tech Innovator
        </p>
        <div className="space-x-4">
          <a
            href="/path/to/resume"
            className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-200 animate__animated animate__fadeInUp animate__delay-2s"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 animate__animated animate__fadeInUp animate__delay-3s"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
    