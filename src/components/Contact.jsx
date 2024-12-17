// import React from 'react';

const Contact = () => {
  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4">Feel free to reach out for collaborations or opportunities.</p>
        <a
          href="mailto:your.email@example.com"
          className="text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
