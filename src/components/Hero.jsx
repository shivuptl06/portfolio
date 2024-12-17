
const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white">
      <div className="text-center p-4">
        <h1 className="text-5xl font-extrabold mb-4">Hi, I&apos;m Shivam Patel</h1>
        <p className="text-lg mb-6">
          Web Developer | Flutter App Creator | Tech Innovator
        </p>
        <div className="space-x-4">
          <a
            href="/path/to/resume"
            className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-200"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
